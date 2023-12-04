// Импортируйте axiosInstance, если он вам нужен
import axios from 'axios';
import axiosInstance from '../../helpers/instance';

const state = {
  articles: null,
  article: null,
  articlesMain: null,
};

const getters = {
};

const actions = {
  async getArticles({ commit }) {
    try {
      const response = await axiosInstance.get('/articles/articles/');

      if (response.data) {
        commit('setArticles', response.data);
        console.log(response.data)
      }

      return response.data;
    } catch (error) {
      console.error('Ошибка:', error);
      throw error;
    }
  },
  async getArticlesMain({ commit }, event = null) {
    try {
      let url = `/articles/articles/`;

      if (event) {
        url += event;
      }

      const response = await axiosInstance.get(url);

      if (response && response.data && response.data.results) {
        commit('setArticlesMain', response.data.results);
        return response.data.results;
      }
    } catch (error) {
      console.error('Ошибка:', error);
      throw error;
    }
  },
  async getArticle({ commit }, id) {
    try {
      if (id) {
        const response = await axiosInstance.get(`/articles/articles/${id}/`)

        if (response.data) {
          commit('setArticle', response.data);
          console.log(response.data)
        }

        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error);
      throw error;
    }
  }
};

const mutations = {
  setArticles(state, data) {
    state.articles = data;
  },
  setArticle(state, data) {
    state.article = data;
  },
  setArticlesMain(state, data) {
    state.articlesMain = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
