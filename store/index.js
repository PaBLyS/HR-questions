const axios = require('axios');

export const state = () => ({
  user: [
    {
      login: 'admin',
      password: 'qwerty'
    }
  ],
  vacancies: [],
  questions: []
});

export const getters = {
  user(state) {
    return state.user;
  },
  vacancies(state) {
    return state.vacancies;
  },
  questions(state) {
    return state.questions;
  }
};

export const mutations = {
  loadVacancies(state, posts) {
    state.vacancies = [];
    posts.map((elem) => {
      state.vacancies.push(elem);
    })
  },
  loadQuestions(state, posts) {
    state.questions = [];
    posts.map((elem) => {
      state.questions.push(elem);
    })
  },
};

export const actions = {
  fetchVacancies(context) {
    fetch('http://127.0.0.1:8080/vacancies')
      .then((res) => res.json())
      .then((res) => {
        context.commit('loadVacancies', res.data);
      });
  },


  // Questions methods
  fetchQuestions(context) {
    axios.get('http://127.0.0.1:8080/questions')
      .then((res) => {
        context.commit('loadQuestions', res.data);
      });
  },
  fetchEditQuestions(context, obj) {
   axios({
     method: 'put',
     url: `http://127.0.0.1:8080/questions/${obj.id}`,
     data: obj
   })
      .then(() => context.dispatch('fetchQuestions'))
      .catch(err => console.error(err));
  },
  fetchDeleteQuestions(context, obj) {
    axios({
      method: 'delete',
      url: `http://127.0.0.1:8080/questions/${obj.id}`
    })
      .then(() => context.dispatch('fetchQuestions'))
      .catch(err => console.error(err));
  },
};

