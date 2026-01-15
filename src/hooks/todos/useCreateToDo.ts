import { queryClient } from "@/lib/queryClient";
import { queryKeys } from "@/lib/queryKeys";
import { createToDo } from "@/services/to-dos/create-todo.service";
import { useMutation } from "@tanstack/react-query";

export const useCreateToDo = useMutation({
  // Agregar tipado
  mutationFn: (payload: any) => createToDo(payload),
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.todos.all,
    });
  },
});
