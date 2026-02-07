import axios from 'axios'

const request = axios.create({
    // baseURL: "https://fizomarkt-server.onrender.com/api/v1",
    // baseURL: "http://localhost:5000/api/v1",
    baseURL: import.meta.env.VITE_BASE_URL,
});

request.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
  
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
      
      config.params = {...config.params };
      return config;
    },  
);

export const baseSocketUrl = import.meta.env.VITE_BASE_SOCKET_URL

export default request;