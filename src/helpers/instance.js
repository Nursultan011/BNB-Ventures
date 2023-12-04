import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://bnbventures.kz/backend/',
  headers: {
    'Accept-Language': 'ru'
  }
});

export default axiosInstance;
