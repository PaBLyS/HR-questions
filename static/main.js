function setStorage(name, value) {
  localStorage.setItem(name, value);
}

function getStorage(name) {
  if (name === 'access') {
    return localStorage.getItem(name) === "true"
  } else {
    return localStorage.getItem(name);
  }
}

async function axiosWrap(axios, param, obj) {
  var axiosRes = null;
  try {
    axiosRes = await axios({
      ...obj,
      headers: {
        "Authorization": getStorage('token')
      }
    })
  } catch(e) {
    if (e.response.status === 401) {
      try {
        let token = await axios({
          method: 'post',
          url: `${param.store.state.url}/refresh-tokens`,
          data: {
            refreshToken: getStorage('refreshToken')
          }
        })
        setStorage('token', token.data.accessToken);
        setStorage('refreshToken', token.data.refreshToken);
        try {
          axiosRes = await axios({
            ...obj,
            headers: {
              "Authorization": getStorage('token')
            }
          })
        } catch {
          param.redirect !== undefined ? await param.redirect('/') : await param.$router.push('/')
        }
      } catch {
        param.redirect !== undefined ? await param.redirect('/') : await param.$router.push('/')
      }
    }
  }
  return axiosRes
}