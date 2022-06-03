import "./console.css";
import React from "react";
import { Box, Flex, Tooltip, Button } from "@chakra-ui/react";
import { ReactTerminalStateless as Terminal } from "react-terminal-component";
import { Help } from "../Help";
import { useEventKeyForFocus, COPY_LABEL } from "../../../custom";
import { useTerminal } from "./terminal.hook";

const Execute = ({ Children, text, isCopied, colorSelected, ...rest }) => (
  <Tooltip hasArrow placement="left" label={COPY_LABEL} isOpen={isCopied}>
    <Button bg={colorSelected} color="black" borderRadius={0} {...rest}>
      {Children || text}
    </Button>
  </Tooltip>
);

const Console = ({ colorSelected }) => {
  // console.log(colorSelected);
  const { isCopied, handleExecute, terminalProps } = useTerminal();
  // const { ref, isFocus } = useEventKeyForFocus();

  terminalProps.theme["promptSymbolColor"] = colorSelected;
  terminalProps.theme["outputColor"] = colorSelected;
  terminalProps.theme["commandColor"] = colorSelected;

  return (
    <Box className="console">
      <Terminal
        {...terminalProps}
        // autoFocus={isFocus}
        // ref={ref}
      />

      <Flex mt={4} justifyContent="space-between">
        <Help />
        <Execute
          colorSelected={colorSelected}
          text="EXECUTE"
          isCopied={isCopied}
          onClick={handleExecute}
        />
      </Flex>
    </Box>
  );
};

export { Console };
