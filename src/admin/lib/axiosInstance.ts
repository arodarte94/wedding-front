import axios from "axios";

const defaultInstance = axios.create();
defaultInstance.defaults.headers.common['Content-Type'] = 'application/json';

// Add a request interceptor
defaultInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage
    const token = JSON.parse(global?.window?.localStorage.getItem('user') || '')?.token;

    // If a token is found, add it to the Authorization header
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default defaultInstance;