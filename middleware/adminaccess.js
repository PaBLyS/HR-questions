export default function ({ store, redirect }) {
  if (!(getStorage('token') && getStorage('access'))) {
    return redirect('/')
  }
}