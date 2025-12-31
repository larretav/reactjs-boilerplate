
import axios from "axios";

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  withCredentials: true,
  timeout: 10000,
});

