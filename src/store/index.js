import { createStore } from 'vuex'
import auth from './modules/auth';
import profile from './modules/profile';
import articles from './modules/articles';
import search from './modules/search';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    profile,
    articles,
    search
  }
})
