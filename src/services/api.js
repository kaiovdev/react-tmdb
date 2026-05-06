import axios from "axios";

// base url

// req

const token = import.meta.env.VITE_API_TOKEN;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
