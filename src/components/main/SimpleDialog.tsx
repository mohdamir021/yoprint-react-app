import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import React from "react";

type SimpleDialogProps = {
  title: string;
  description: string;
  disclosure?: UseDisclosureReturn;
  onConfirm?: Function;
};

export default function SimpleDialog(props: SimpleDialogProps) {
  const { title, description, disclosure, onConfirm } = props;

  const handleConfirm = () => {
    disclosure?.onClose();
    onConfirm?.();
  };

  return (
    <Dialog.Root
      open={disclosure?.open}
      onExitComplete={disclosure?.onClose}
      closeOnEscape
      closeOnInteractOutside
    >
      {!disclosure && <Dialog.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Dialog
        </Button>
      </Dialog.Trigger>}
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body textWrap={"wrap"}>
              <p>{description}</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" onClick={disclosure?.onClose}>
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button onClick={handleConfirm}>Confirm</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
