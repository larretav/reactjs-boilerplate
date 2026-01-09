import { baseApi } from "../api";

export const createToDo = async (body: any) => {

  const { data } = await baseApi.post<any>("/todos", body);

  return data;

}