import { sleep } from "@/utils/general";
import { baseApi } from "../api";

export const deleteToDo = async (id: string | number): Promise<any> => {

  try {
    await sleep(2);
    const { data } = await baseApi.delete<any>("/todos/" + id);
    console.log(data);

    return data;

  } catch (error) {
    throw error;
  }

}