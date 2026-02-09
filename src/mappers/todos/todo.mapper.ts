import { IToDoResp } from "@/interfaces/todos/todo.resp";
import { ToDo, ToDoStatus } from "@/types/todos/todo";


export const ToDoStatusFromApi: Record<number, ToDoStatus> = {
  0: "pending",
  1: "in-progress",
  2: "done",
  3: "deleted",
};

export const mapTodo = (todo: IToDoResp): ToDo => {
  return {
    id: todo.id,
    title: todo.titulo,
    description: todo.descripcion,
    date: todo.fecha_creado,
    status: getState(todo.estado),
    statusNumber: todo.estado,
    isPending: isPending(todo.estado),
    isInProgress: isInProgress(todo.estado),
    isDone: isDone(todo.estado),
    isDeleted: isDeleted(todo.estado),
  }
}

const getState = (status: number): ToDoStatus => {
  return ToDoStatusFromApi[status] ?? "pending";
}

const isPending = (status: number) => status === 0;
const isInProgress = (status: number) => status === 1;
const isDone = (status: number) => status === 2;
const isDeleted = (status: number) => status === 3;


const mapTodoObject = (todo: Pick<ToDo, "title" | "description" | "status" >): ToDo => {
  return {
  id: "",
  title: "",
  description: "",
  status: "pending",
  statusNumber: 0,
  isPending: false,
  isDone: false,
  isInProgress: false,
  isDeleted: false,
  date: ""
}
}
