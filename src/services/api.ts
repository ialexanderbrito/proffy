import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-api.ialexanderbrito.dev',
});

export default api;
