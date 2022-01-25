import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-oficial.herokuapp.com',
});

export default api;
