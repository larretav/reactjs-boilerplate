
import { baseApi } from "../api";
import { ToDoReq } from "@/types/todos/todo.req";

export const createToDo = async (body: ToDoReq): Promise<any> => {

  try {
    
    const { data } = await baseApi.post<any>("/todos", body);
    console.log(body, data);

    return data;

  } catch (error) {
    throw error;
  }

}