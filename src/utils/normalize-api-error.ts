import { AxiosError } from 'axios';
import { ApiError } from '@/types/api/api-error';

export const normalizeApiError = (error: unknown): ApiError => {
  if (error instanceof AxiosError) {
    return {
      message: error.response?.data?.message ?? 'Error del servidor',
      status: error.response?.status,
      code: error.response?.data?.code,
    };
  }

  return { message: 'Error inesperado' };
};
