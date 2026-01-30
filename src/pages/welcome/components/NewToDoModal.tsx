import { ChipRadio } from "@/components/ui/ChipRadio";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, RadioGroup, useDisclosure } from "@heroui/react"
import { Plus } from "lucide-react";

export const NewToDoModal = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  return (
    <>
      <Button variant="solid" color="primary" startContent={<Plus size="1rem" />} onPress={onOpen}>Nueva tarea</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Agregar tarea</ModalHeader>
              <ModalBody>
                <Input label="Título" />
                <Input label="Descripción" />

                <RadioGroup >
                  <ChipRadio description="Pendiente" value="pending" >
                    Pendiente
                  </ChipRadio>
                  <ChipRadio description="En progreso" value="in-progress" >
                    En progreso
                  </ChipRadio>
                  <ChipRadio description="Completada" value="done" >
                    Completada
                  </ChipRadio>
                </RadioGroup>

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
