
import { todoStates } from '../../constants/todo-states.const';

export type ToDo = {
  id: string;
  title: string;
  description: string;
  state: ToDoState;
  isPending: boolean;
  isDone: boolean;
  isInProgress: boolean;
  isDeleted: boolean;
  date: string;
}

export type ToDoState = keyof typeof todoStates;

