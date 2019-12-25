const axios = require('axios');

const url = 'http://127.0.0.1:8080/';

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
  // Vacancies methods
  fetchVacancies(context) {
    axios.get(url + 'vacancies')
      .then((res) => {
        context.commit('loadVacancies', res.data);
      });
  },
  fetchAddVacancies(context, obj) {
    axios({
      method: 'post',
      url: `${url}vacancies`,
      data: obj
    })
      .then(() => context.dispatch('fetchVacancies'))
      .catch(err => console.error(err));
  },
  fetchEditVacancies(context, obj) {
    axios({
      method: 'put',
      url: `${url}vacancies/${obj.id}`,
      data: obj
    })
      .then(() => context.dispatch('fetchVacancies'))
      .catch(err => console.error(err));
  },
  fetchDeleteVacancies(context, obj) {
    axios({
      method: 'delete',
      url: `${url}vacancies/${obj.id}`
    })
      .then(() => context.dispatch('fetchVacancies'))
      .catch(err => console.error(err));
  },


  // Questions methods
  fetchQuestions(context) {
    axios.get(url + 'questions')
      .then((res) => {
        context.commit('loadQuestions', res.data);
      });
  },
  fetchAddQuestions(context, obj) {
    axios({
      method: 'post',
      url: `${url}questions`,
      data: obj
    })
      .then(() => context.dispatch('fetchQuestions'))
      .catch(err => console.error(err));
  },
  fetchEditQuestions(context, obj) {
   axios({
     method: 'put',
     url: `${url}questions/${obj.id}`,
     data: obj
   })
      .then(() => context.dispatch('fetchQuestions'))
      .catch(err => console.error(err));
  },
  fetchDeleteQuestions(context, obj) {
    axios({
      method: 'delete',
      url: `${url}questions/${obj.id}`
    })
      .then(() => context.dispatch('fetchQuestions'))
      .catch(err => console.error(err));
  },
};

