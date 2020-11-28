import axios from 'axios';

const api = axios.create({
  baseURL: 'http://nodo-core-testfront-back.subservers.nodo.cc/api',
});

export default api;
