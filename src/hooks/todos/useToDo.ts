import { queryKeys } from "@/lib/queryKeys";
import { getToDos } from "@/services/to-dos/get-todos.service";
import { useQuery } from "@tanstack/react-query";

export function useToDos() {

  return useQuery({
    queryKey: queryKeys.todos.all,
    queryFn: getToDos,
  });

}