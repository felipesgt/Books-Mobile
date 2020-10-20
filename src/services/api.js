import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
  timeout: 100000,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
