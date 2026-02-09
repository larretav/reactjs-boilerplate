import { queryClient } from "@/lib/queryClient";
import { queryKeys } from "@/lib/queryKeys";
import { createToDo } from "@/services/todos/create-todo.service";
import { ToDoReq } from "@/types/todos/todo.req";
import { useMutation } from "@tanstack/react-query";

export const useCreateToDo = () => useMutation({
  // Agregar tipado 
  mutationFn: (payload: ToDoReq) => createToDo(payload),
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.todos.all,
    });
  },
});
