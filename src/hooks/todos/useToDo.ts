import { queryKeys } from "@/lib/queryKeys";
import { mapTodo } from "@/mappers/todos/todo.mapper";
import { getToDos } from "@/services/to-dos/get-todos.service";
import { useQuery } from "@tanstack/react-query";

export function useToDos() {

  return useQuery({
    queryKey: queryKeys.todos.all,
    queryFn: getToDos,
    select: (data) => data.map(mapTodo)
  });

}