import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:44303/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 30000, // 30 seconds timeout for file uploads
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  // Remove Content-Type for FormData to let browser set boundary
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  
  return config;
});

export default api;