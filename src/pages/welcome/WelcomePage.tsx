import DefaultLayout from '@/app/default-layout'
import { useToDos } from '@/hooks/todos/useToDo'
import { Spinner } from "@heroui/spinner";
import { cn } from '@/utils/general';
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { useUpdateToDo } from '@/hooks/todos/useUpdateToDo';
import { ToDo } from '@/types/todos/todo';
import { mapReqTodo } from '@/mappers/todos/todo.req.mapper';
import { Check, Trash2 } from "lucide-react";

export const WelcomePage = () => {

  const { data, isFetching, error } = useToDos();
  const { mutate, isPending } = useUpdateToDo();

  const markAsComplete = (todo: ToDo) => {
    mutate({ id: todo.id, payload: mapReqTodo({ state: 'done' }) });
  }

  const onDelete = (todo: ToDo) => {
    mutate({ id: todo.id, payload: mapReqTodo({ state: 'deleted' }) });
  }


  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center">
        {isFetching && <Spinner />}
        {error && <div className="text-danger text-small">Error al cargar la lista de tareas. {error.message}</div>}
        {data && <div className="flex flex-col gap-4">
          {data.map(todo => <Card key={todo.id} shadow="sm" className="relative group" isDisabled={todo.isDeleted}>
            <CardHeader> <span className={cn("inline-block size-4 mr-2 rounded-full", {
              "border border-warning": todo.isPending,
              "bg-blue-400": todo.isInProgress,
              "bg-success": todo.isDone,
            })}></span> {todo.title}</CardHeader>
            <CardBody>{todo.description}</CardBody>
            <div className="flex gap-1 sm:hidden sm:absolute sm:bottom-2 sm:right-2 sm:group-hover:flex">
              <Button size="sm" isIconOnly isLoading={isPending} onPress={() => markAsComplete(todo)}><Check size="1rem" /></Button>
              <Button size="sm" isIconOnly isLoading={isPending} onPress={() => onDelete(todo)}><Trash2 size="1rem" /></Button>
            </div>
          </Card>)}
        </div>}

      </div>
    </DefaultLayout>
  )
}
