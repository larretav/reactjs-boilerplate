import { todoStates } from "@/constants/todo-states.const";
import { ToDo } from "@/types/todos/todo";
import { ToDoReq } from "@/types/todos/todo.req";

export const mapReqTodo = (todo: Partial<ToDo>): Partial<ToDoReq> => {
  return {
    id: todo.id,
    titulo: todo.title,
    descripcion: todo.description,
    fecha: todo.date,
    estado: todo.state && todoStates[todo.state],
  }
}

