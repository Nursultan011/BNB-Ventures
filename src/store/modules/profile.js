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
  async updateProfile({ commit, rootState }, body) {
    try {
      const user = rootState.auth.user;
      const token = user.token;

      const response = await axiosInstance.put(`/users/profile/`, body, {
        headers: { Authorization: `Token ${token}` }
      });

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('Ошибка:', error);
      throw error;
      // Обработка ошибок
    }
  },
  async createProfile({ commit, rootState }, body) {
    try {
      const rolesEndpoints = {
        "StartUp": "startups",
        "Investor": "investors",
        "InvestFund": "invest-funds",
        "Corporation": "corporations",
        "Specialist": "specialists"
      };

      const user = rootState.auth.user;
      const token = user.token;

      if (body) {
        body.user = user?.user?.id;
      }

      const formData = new FormData();
      Object.keys(body).forEach(key => {
        const value = body[key];
        if (Array.isArray(value)) {
          value.forEach((item, index) => {
            formData.append(`${key}[]`, item);
          });
        } else if (value instanceof File) {
          formData.append(key, value, value.name);
        } else {
          formData.append(key, value);
        }
      });

      const response = await axiosInstance.post(`/profiles/users/${rolesEndpoints[user.user.profile_type]}/`, formData, {
        headers: { Authorization: `Token ${token}`, }
      });

      if (response.data) {
        // window.location.reload();
        return response.data;
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        throw error.response.data;
      }
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
        "InvestFund": "invest-funds",
        "Corporation": "corporations",
        "Specialist": "specialists"
      };

      const user = rootState.auth.user;

      if (user && user.token && rolesEndpoints[user.user.profile_type]) {
        const requestUrl = `profiles/users/${rolesEndpoints[user.user.profile_type]}/`;

        const response = await axiosInstance.get(requestUrl, {
          headers: { Authorization: `Token ${user.token}` }
        });

        if (response.data && Array.isArray(response.data) && response.data.length >= 1) {
          commit('setForm', response.data[0])
          return response.data[0];
        }
      }
    } catch (error) {
      console.log('Ошибка:', error);
      throw error;
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
