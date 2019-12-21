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
      .then((response) => response.json())
      .then((response) => {
        context.commit('loadVacancies', response);
      });
  },
  fetchQuestions(context) {
    fetch('http://127.0.0.1:8080/questions')
      .then((response) => response.json())
      .then((response) => {
        context.commit('loadQuestions', response);
      });
  },
  fetchEditQuestions(context, elem) {
    fetch(`http://127.0.0.1:8080/questions/${elem.id}`, {
      method: 'POST',
      body: JSON.stringify(elem)
    })
      .then((response) => response.json())
      .then(response => console.log('Finish', response))
      .catch(err => console.error(err));
  },
  fetchDeleteQuestions(context, elem) {
    fetch(`http://127.0.0.1:8080/questions/${elem.id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then(response => console.log('Finish'))
      .catch(err => console.error(err));
  },
};

