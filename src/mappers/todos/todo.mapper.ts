import { IToDoResp } from "@/interfaces/todos/todo.resp";
import { ToDo } from "@/types/todos/todo";

export const mapTodo = (todo: IToDoResp): ToDo => {
  return {
    id: todo.id,
    title: todo.titulo,
    description: todo.descripcion,
    date: todo.fecha,
    state: todo.estado,
    isDone: isDone(todo.estado),
  }
}

const isDone = (status: number) => status === 2;