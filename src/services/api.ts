
import axios from "axios";

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  withCredentials: true,
  timeout: 10000,
});


baseApi.interceptors.request.use(config => {
  // Lógica de autenticación
  // Ejemplo: agregar token de autenticación a los encabezados
  // const token = localStorage.getItem("authToken");
  // if (token)
  //   config.headers.Authorization = `Bearer ${token}`;

  return config;
}, error => Promise.reject(error));


baseApi.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response.data)
)