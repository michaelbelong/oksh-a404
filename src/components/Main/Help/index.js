import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  Tooltip,
  Button
} from "@chakra-ui/react";
import { BodyTable } from "./BodyTable";
import { SoundConsumer, useEventKeyForHelp } from "../../../custom";

const LABEL = "Create 𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 𝚝𝚎𝚡𝚝 from 𝚞𝚗𝚒𝚌𝚘𝚍𝚎";

const Help = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { playClick } = SoundConsumer();
  // useEventKeyForHelp({ isOpen, onOpen })
  const handleClick = () => playClick(onOpen());

  return (
    <>
      <Tooltip hasArrow placement="right" label={LABEL}>
        <Button
          bg="ui.gray.500"
          color="black"
          borderRadius={0}
          onClick={handleClick}
        >
          ?
        </Button>
      </Tooltip>

      <Modal trapFocus={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent bg="black" border="2px">
          <ModalCloseButton autoFocus={true} />

          <ModalHeader>Keyboard Shortcuts</ModalHeader>

          <BodyTable />

          <ModalFooter>
            <Button bg="ui.green" color="black" onClick={onClose}>
              Dismiss
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { Help };
