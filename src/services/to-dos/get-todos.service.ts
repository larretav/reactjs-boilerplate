import { IToDoResp } from "@/interfaces/todos/todo.resp";
import { baseApi } from "../api";

export const getToDos = async () => {
  try {

    const { data } = await baseApi.get<IToDoResp[]>("/todos");

    return data;

  } catch (error) {
    throw error;
  }
}