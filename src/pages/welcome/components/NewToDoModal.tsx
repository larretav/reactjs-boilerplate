import { ChipRadio } from "@/components/ui/ChipRadio";
import { useCreateToDo } from "@/hooks/todos/useCreateToDo";
import { mapReqTodo } from "@/mappers/todos/todo.req.mapper";
import { ToDoStatus } from "@/types/todos/todo";
import { Button, Form, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, RadioGroup, Textarea, useDisclosure } from "@heroui/react"
import { Plus } from "lucide-react";
import { useState } from "react";

export const NewToDoModal = () => {

  const { mutate, isPending } = useCreateToDo();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [status, setStatus] = useState<ToDoStatus>("pending");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const options: { value: ToDoStatus, label: string, activeColor?: "warning" | "primary" | "default" | "secondary" | "success" | "danger" }[] = [
    { value: "pending", label: "Pendiente", activeColor: "warning" },
    { value: "in-progress", label: "En progreso", activeColor: "primary" },
    { value: "done", label: "Completado", activeColor: "success" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = mapReqTodo({ status, title, description });

    const resp = mutate(newTodo);
    if (resp.)
  }

  return (
    <>
      <Button variant="solid" color="primary" startContent={<Plus size="1rem" />} onPress={onOpen}>Nueva tarea</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
        <ModalContent >
          {(onClose) => (
            <Form onSubmit={handleSubmit}>
              <ModalHeader >Agregar tarea</ModalHeader>
              <ModalBody>

                <Input label="Título" value={title} onValueChange={setTitle} validate={(value) => {
                  if (!value) return "El título es requerido"
                }} />

                <Textarea label="Descripción" value={description} onValueChange={setDescription} validate={(value) => {
                  if (!value) return "La descripción es requerida"
                }} />

                <RadioGroup orientation="horizontal" value={status} onValueChange={(val) => setStatus(val as ToDoStatus)} >
                  {
                    options.map(opt => (
                      <ChipRadio value={opt.value} key={opt.value}
                        activeColor={opt.activeColor}
                      >
                        {opt.label}
                      </ChipRadio>
                    ))
                  }
                </RadioGroup>

              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="flat" onPress={onClose} className="px-8" isDisabled={isPending}>
                  Cerrar
                </Button>
                <Button color="primary" className="px-8" type="submit" isLoading={isPending}>
                  Agregar
                </Button>
              </ModalFooter>
            </Form>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
