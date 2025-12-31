import { baseApi } from "../api";

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export const getToDos = async () => {
  try {
    // Tipar la data con interfaces
    const { data } = await baseApi.get<ToDo[]>("/todos");
    // Mappear la respuesta
    // const mappedData = data.map(ToDo.fromJson);
    // return mappedData;
    return data;
  } catch (error) {
    throw error;
  }
}