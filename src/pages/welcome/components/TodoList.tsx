import { IconButton } from '@/components/ui/IconButton';
import { useToDos } from '@/hooks/todos/useToDo';
import { useUpdateToDo } from '@/hooks/todos/useUpdateToDo';
import { mapReqTodo } from '@/mappers/todos/todo.req.mapper';
import { ToDo, ToDoState } from '@/types/todos/todo';
import { cn } from '@/utils/general';
import { Card, CardHeader, CardBody } from '@heroui/card';
import { Spinner } from '@heroui/spinner';
import { Check, Circle, Trash2 } from 'lucide-react';

export const TodoList = () => {


  const { data, isFetching, error } = useToDos();


  return (
    <>
      {isFetching && <Spinner />}
      {error && <div className="text-danger text-small">Error al cargar la lista de tareas. {error.message}</div>}
      {data && <div className="flex flex-col gap-4">
        {data.map(todo => <div key={todo.id} className="relative group">
          <Card shadow="sm" isDisabled={todo.isDeleted} >
            <CardHeader className="font-semibold"> <span className={cn("inline-block size-4 mr-2 rounded-full", {
              "border border-warning": todo.isPending,
              "bg-blue-400": todo.isInProgress,
              "bg-success": todo.isDone,
              "bg-danger": todo.isDeleted,
            })}></span>{todo.title}</CardHeader>
            <CardBody className="text-foreground-500">{todo.description}</CardBody>
          </Card>
          <ActionButtons todo={todo} className="!opacity-100 z-50" />
        </div>)}
      </div>}
    </>

  )
}

const ActionButtons = ({ todo, className }: { todo: ToDo; className?: string }) => {

  const { mutate, isPending } = useUpdateToDo();

  const markAs = (id: string, state: ToDoState) => {
    mutate({ id, payload: mapReqTodo({ state }) });
  }

  return (
    <div className={cn("flex gap-1 justify-end p-2 absolute bottom-0 right-0 sm:hidden sm:group-hover:flex", className)}>
      {!todo.isDeleted && <>
        {(todo.isPending || todo.isDone) && <IconButton radius="sm" color="primary" isLoading={isPending} onPress={() => markAs(todo.id, 'in-progress')}><Circle size="1rem" /></IconButton>}
        {todo.isInProgress && <IconButton radius="sm" color="success" isLoading={isPending} onPress={() => markAs(todo.id, 'done')}><Check size="1rem" /></IconButton>}
        <IconButton radius="sm" color="danger" isLoading={isPending} onPress={() => markAs(todo.id, 'deleted')}><Trash2 size="1rem" /></IconButton>
      </>}

      {todo.isDeleted && <IconButton radius="sm" color="warning" isLoading={isPending} onPress={() => markAs(todo.id, 'pending')}><Circle size="1rem" /></IconButton>}
    </div>
  )
}
