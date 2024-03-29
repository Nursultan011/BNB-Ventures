// Импортируйте axiosInstance, если он вам нужен
import axiosInstance from '../../helpers/instance';

const localUser = localStorage.getItem("setUser")

const state = {
  user: JSON.parse(localUser) ?? null
};

const getters = {
};

const actions = {
  async login({ commit }, { email, password }) {
    try {
      const response = await axiosInstance.post('/users/login/', { email, password });

      if (response.data && response.data.token) {
        localStorage.setItem("setUser", JSON.stringify(response.data))
        commit('setUser', response.data);

        return response.data;
      }

    } catch (error) {
      console.error('Ошибка аутентификации', error);
      throw error.response;
      // Обработка ошибок
    }
  },
  async registration({ commit }, form) {
    try {
      const response = await axiosInstance.post('/users/registration/', form);

      console.log(response)
      // commit('setUser', response.data);
      // Дальнейшие действия после успешной аутентификации
      return response.data;
    } catch (error) {
      console.error('Ошибка аутентификации', error);
      // Обработка ошибок
      throw error;
    }
  },
  async sendCode({ commit }, email) {
    try {
      const response = await axiosInstance.post('/users/code/request/', email);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async verification({ commit }, code) {
    try {
      const response = await axiosInstance.post('/users/verification/', code);

      return response.data;
    } catch (error) {
      console.error('Ошибка', error);
      throw error;
    }
  },
  async logout({ commit }) {
    try {
      localStorage.removeItem("setUser");
      commit('setUser', null);
      window.location.reload();
      return;
    } catch (err) {
      console.log('kj')
    }
  }
};

const mutations = {
  setUser(state, data) {
    state.user = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
