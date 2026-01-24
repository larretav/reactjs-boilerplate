import { todoStates } from "@/constants/todo-states.const";
import { queryKeys } from "@/lib/queryKeys";
import { mapTodo } from "@/mappers/todos/todo.mapper";
import { getToDos } from "@/services/todos/get-todos.service";
import { useQuery } from "@tanstack/react-query";

export function useToDos() {

  return useQuery({
    queryKey: queryKeys.todos.all,
    queryFn: getToDos,
    select: (data) => data.map(mapTodo).sort((a, b) => todoStates[a.state] - todoStates[b.state]),
  });

}