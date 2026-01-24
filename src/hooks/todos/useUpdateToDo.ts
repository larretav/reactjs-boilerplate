import { queryClient } from "@/lib/queryClient";
import { queryKeys } from "@/lib/queryKeys";
import { updateToDo } from "@/services/todos/update-todo.service";
import { ToDoReq } from "@/types/todos/todo.req";
import { useMutation } from "@tanstack/react-query";

export const useUpdateToDo = () => useMutation({
  // Agregar tipado
  mutationFn: ({ id, payload }: { id: string | number, payload: Partial<ToDoReq> }) => updateToDo(id, payload),
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.todos.all,
    });
  },
});
