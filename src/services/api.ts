
import axios from "axios";

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  withCredentials: true,
  timeout: 10000,
  timeoutErrorMessage: "La solicitud ha tardado demasiado tiempo en completarse, por favor intente de nuevo.",
});

