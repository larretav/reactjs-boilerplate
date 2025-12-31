import { baseApi } from "./api";

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
  (error) => {
    // Manejo global de errores 
    return Promise.reject(error.response.data)
  }
)