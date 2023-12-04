// Импортируйте axiosInstance, если он вам нужен
import axiosInstance from '../../helpers/instance';

const state = {
  profile: null,
  form: null,
};

const getters = {
};

const actions = {
  async getProfile({ commit, rootState }) {
    try {
      const user = rootState.auth.user;
      const token = user.token;

      const response = await axiosInstance.get(`/users/profile/`, {
        headers: { Authorization: `Token ${token}` }
      });

      if (response.data) {
        commit('setProfile', response.data);
        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error);
      // Обработка ошибок
    }
  },
  async updatePassword({ commit, rootState }, body) {
    try {
      const user = rootState.auth.user;
      const token = user.token;

      const response = await axiosInstance.put(`/users/password-update/`, body, {
        headers: { Authorization: `Token ${token}` }
      });

      if (response.data) {
        localStorage.removeItem("setUser");
        commit('setUser', null);

        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error);
      return error.response;
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
        }
      }
    } catch (error) {
      console.error('Ошибка:', error);
      // Обработка ошибок
    }
  },
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
