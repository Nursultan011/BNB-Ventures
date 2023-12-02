import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://bnbventures.kz/backend/',
});

export default axiosInstance;
