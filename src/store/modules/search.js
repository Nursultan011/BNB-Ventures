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
  investFund: null,
  filters: null,
};

const getters = {
};

const actions = {
  async getStartups({ commit, rootState }, filters) {
    try {
      let url = 'profiles/visitors/startups/';

      if (filters && Object.keys(filters).length) {
        const queryParameters = new URLSearchParams();

        for (const [key, value] of Object.entries(filters)) {
          if (value.length) {
            queryParameters.append(key, value.join(','));
          }
        }

        url += '?' + queryParameters.toString();
      }

      const response = await axiosInstance.get(url);

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
  async getCorporations({ commit, rootState }, filters) {
    try {
      let url = 'profiles/visitors/corporations/';

      if (filters && Object.keys(filters).length) {
        const queryParameters = new URLSearchParams();

        for (const [key, value] of Object.entries(filters)) {
          if (value.length) {
            queryParameters.append(key, value.join(','));
          }
        }

        url += '?' + queryParameters.toString();
      }

      const response = await axiosInstance.get(url);

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
  async getInvestors({ commit, rootState }, filters) {
    try {
      let url = 'profiles/visitors/investors/';

      if (filters && Object.keys(filters).length) {
        const queryParameters = new URLSearchParams();

        for (const [key, value] of Object.entries(filters)) {
          if (value.length) {
            queryParameters.append(key, value.join(','));
          }
        }

        url += '?' + queryParameters.toString();
      }

      const response = await axiosInstance.get(url);

      if (response && response.data) {
        commit('setInvestors', response.data);

        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error);
      // Обработка ошибок
    }
  },
  async getSpecialists({ commit, rootState }, filters) {
    try {
      let url = 'profiles/visitors/specialists/';

      if (filters && Object.keys(filters).length) {
        const queryParameters = new URLSearchParams();

        for (const [key, value] of Object.entries(filters)) {
          if (value.length) {
            queryParameters.append(key, value.join(','));
          }
        }

        url += '?' + queryParameters.toString();
      }

      const response = await axiosInstance.get(url);


      if (response && response.data) {
        commit('setSpecialists', response.data);

        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error);
      // Обработка ошибок
    }
  },
  async getSpecialist({ commit, rootState }, id) {
    try {
      const response = await axiosInstance.get(`profiles/visitors/specialists/${id}`);

      if (response && response.data) {
        commit('setSpecialist', response.data);

        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error)
    }
  },
  async getFilters({ commit, rootState }) {
    try {
      const requests = [
        { url: 'bussiness-models', promise: axiosInstance.get('modules/bussiness-models/') },
        { url: 'countries', promise: axiosInstance.get('modules/countries/') },
        { url: 'industries', promise: axiosInstance.get('modules/industries/') },
        { url: 'innovation-methods', promise: axiosInstance.get('modules/innovation-methods/') },
        { url: 'invest-stages', promise: axiosInstance.get('modules/invest-stages/') },
        { url: 'selling-models', promise: axiosInstance.get('modules/selling-models/') },
        { url: 'startup-stages', promise: axiosInstance.get('modules/startup-stages/') },
        { url: 'technologies', promise: axiosInstance.get('modules/technologies/') },
      ];

      const results = await Promise.allSettled(requests.map(req => req.promise));

      const successfulResponses = {};

      results.forEach((result, index) => {
        const url = requests[index].url;
        if (result.status === 'fulfilled') {
          successfulResponses[url] = result.value.data;
        } else {
          console.error(`Ошибка в запросе к ${url}:`, result.reason);
        }
      });

      commit('setFilters', successfulResponses);

      return successfulResponses;
    } catch (error) {
      console.error('Непредвиденная ошибка в getFilters:', error);
      throw error;
    }
  }

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
  },
  setSpecialist(state, data) {
    state.specialist = data;
  },
  setFilters(state, data) {
    state.filters = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
