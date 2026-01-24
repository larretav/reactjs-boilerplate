import { IToDoResp } from "@/interfaces/todos/todo.resp";
import { ToDo, ToDoState } from "@/types/todos/todo";

export const mapTodo = (todo: IToDoResp): ToDo => {
  return {
    id: todo.id,
    title: todo.titulo,
    description: todo.descripcion,
    date: todo.fecha_creado,
    state: getState(todo.estado),
    isPending: isPending(todo.estado),
    isInProgress: isInProgress(todo.estado),
    isDone: isDone(todo.estado),
    isDeleted: isDeleted(todo.estado),
  }
}

const getState = (state: number): ToDoState => {
  if (state === 0) return 'pending';
  if (state === 1) return 'in-progress';
  if (state === 2) return 'done';
  if (state === 3) return 'deleted';
  return 'pending';
}

const isPending = (status: number) => status === 0;
const isInProgress = (status: number) => status === 1;
const isDone = (status: number) => status === 2;
const isDeleted = (status: number) => status === 3;