// Импортируйте axiosInstance, если он вам нужен
import axiosInstance from '../../helpers/instance';

const state = {
  startups: null,
  startup: null,
  corporations: null,
  corporation: null,
  investors: null,
  investor: null,
  specialists: null,
  specialist: null,
  investFunds: null,
  investFund: null
};

const getters = {
};

const actions = {
  async getStartups({ commit, rootState }) {
    try {
      const response = await axiosInstance.get('profiles/visitors/startups/');

      if (response && response.data) {
        commit('setStartups', response.data);

        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error);
      // Обработка ошибок
    }
  },
  async getStartup({ commit, rootState }, id) {
    try {
      const response = await axiosInstance.get(`profiles/visitors/startups/${id}`);

      if (response && response.data) {
        commit('setStartup', response.data);

        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error)
    }
  },
  async getCorporations({ commit, rootState }) {
    try {
      const response = await axiosInstance.get('profiles/visitors/corporations/');

      if (response && response.data) {
        commit('setCorporations', response.data);

        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error);
      // Обработка ошибок
    }
  },
  async getCorporation({ commit, rootState }, id) {
    try {
      const response = await axiosInstance.get(`profiles/visitors/corporations/${id}`);

      if (response && response.data) {
        commit('setCorporation', response.data);

        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error)
    }
  },
  async getInvestors({ commit, rootState }) {
    try {
      const response = await axiosInstance.get('profiles/visitors/investors/');

      if (response && response.data) {
        commit('setInvestors', response.data);

        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error);
      // Обработка ошибок
    }
  },
  async getSpecialists({ commit, rootState }) {
    try {
      const response = await axiosInstance.get('profiles/visitors/specialists/');

      if (response && response.data) {
        commit('setSpecialists', response.data);

        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error);
      // Обработка ошибок
    }
  },

};

const mutations = {
  setStartups(state, data) {
    state.startups = data;
  },
  setStartup(state, data) {
    state.startup = data;
  },
  setCorporations(state, data) {
    state.corporations = data;
  },
  setCorporation(state, data) {
    state.corporation = data;
  },
  setInvestors(state, data) {
    state.investors = data;
  },
  setSpecialists(state, data) {
    state.specialists = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
