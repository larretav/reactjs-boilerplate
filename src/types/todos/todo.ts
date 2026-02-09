

export type ToDoStatus = "pending" | "in-progress" | "done" | "deleted";

export type ToDo = {
  id: string;
  title: string;
  description: string;
  status: ToDoStatus;
  statusNumber: number;
  isPending: boolean;
  isDone: boolean;
  isInProgress: boolean;
  isDeleted: boolean;
  date: string;
}


