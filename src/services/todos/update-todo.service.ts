import { sleep } from "@/utils/general";
import { baseApi } from "../api";
import { ToDoReq } from "@/types/todos/todo.req";

export const updateToDo = async (id: string | number, body: Partial<ToDoReq>):Promise<any> => {

  try {
    await sleep(2);
    const { data } = await baseApi.patch<any>("/todos/" + id, body);
    console.log(data);

    return data;

  } catch (error) {
    throw error;
  }

}