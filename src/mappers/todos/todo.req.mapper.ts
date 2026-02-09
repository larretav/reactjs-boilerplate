import { ToDo } from "@/types/todos/todo";
import { ToDoReq } from "@/types/todos/todo.req";


export const mapReqTodo = (todo: Pick<ToDo, "title" | "description" | "status">): ToDoReq => {
  return {
    id: new Date().getTime().toString(), // El body no debe contener el id
    titulo: todo.title,
    descripcion: todo.description,
    fecha: new Date().toISOString(), // El body no debe contener la fecha de creación
    estado: todo.status,
  }
}

