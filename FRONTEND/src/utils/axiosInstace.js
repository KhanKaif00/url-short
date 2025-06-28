// axios ka instance banaao
import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true, // This allows cookies to be sent with requests

});

export default axiosInstance;