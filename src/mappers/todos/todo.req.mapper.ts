import { IToDoResp } from "@/interfaces/todos/todo.resp";
import { ToDo } from "@/types/todos/todo";
import { ToDoReq } from "@/types/todos/todo.req";

export const mapReqTodo = (todo: ToDo): ToDoReq => {
  return {
    id: todo.id,
    titulo: todo.title,
    descripcion: todo.description,
    fecha: todo.date,
    estado: todo.state,
  }
}
