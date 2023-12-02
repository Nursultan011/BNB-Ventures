// Импортируйте axiosInstance, если он вам нужен
import axiosInstance from '../../helpers/instance';

const state = {
  profile: null,
  form: null,
};

const getters = {
};

const actions = {
  async getProfile({ commit }, event) {
    try {
      if (event) {
        const response = await axiosInstance.get(`/profiles/users/${event.type}/${event.id}`);

        commit('setProfile', response.data);

        if (response.data) {
          console.log(response.data)
        }

        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error);
      // Обработка ошибок
    }
  },
  async getForm({ commit, rootState }) {
    try {
      const rolesEndpoints = {
        "StartUp": "startups",
        "Investor": "investors",
        "InvestFund": "invest-fund",
        "Corporation": "corporations",
        "Specialist": "specialists"
      };

      const user = rootState.auth.user;
      const userProfile = user.user.profile ?? null;
      const token = user.token;

      if (token && rolesEndpoints[userProfile]) {
        const requestUrl = `profiles/users/${rolesEndpoints[userProfile]}/`;

        const response = await axiosInstance.get(requestUrl, {
          headers: { Authorization: `Token ${token}` }
        });

        if (response.data && Array.isArray(response.data) && response.data.length >= 1) {
          commit('setForm', response.data[0])
          return response.data[0];
        } else if (response.data && Array.isArray(response.data) && response.data.length === 0) {
          return {
            empty: true
          }
        }
      }
    } catch (error) {
      console.error('Ошибка:', error);
      // Обработка ошибок
    }
  }
};

const mutations = {
  setProfile(state, data) {
    state.profile = data;
  },
  setForm(state, data) {
    state.form = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
