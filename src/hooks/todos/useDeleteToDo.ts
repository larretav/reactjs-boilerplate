import { queryClient } from "@/lib/queryClient";
import { queryKeys } from "@/lib/queryKeys";
import { deleteToDo } from "@/services/todos/delete-todo.service";
import { useMutation } from "@tanstack/react-query";

export const useDeleteToDo = useMutation({
  // Agregar tipado
  mutationFn: (id: string | number) => deleteToDo(id),
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.todos.all,
    });
  },
});
