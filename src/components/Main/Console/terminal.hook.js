import { useState } from 'react'
import fancify from 'fancify'
import {
  EmulatorState, 
  OutputFactory, 
  CommandMapping,
  // History, 
  Outputs, 
} from 'javascript-terminal'
import { 
  // SoundConsumer,
  useCopyToClipboard,
  COMMANDS,
  CHAR_LIMIT,
  terminalProps,
} from '../../../custom'
import * as commands from './commands'


const doesContainCmd = (input) => {
  const [ firstCmd ] = input.split(' ')
  console.log('test', COMMANDS.includes(firstCmd)) 
  if (COMMANDS.includes(firstCmd)) return true
  return false
}

const consoleState = EmulatorState.create({
  'commandMapping': CommandMapping.create(commands)
})

// console.info('consoleState ::', consoleState)


export const useTerminal = () => {
  const { isCopied, makeCopy } = useCopyToClipboard()
  const [ emulatorState, setEmulator ] = useState(consoleState)
  const [ inputStr, setInput ] = useState('')
  // const { playClick } = SoundConsumer()

  const onStateChange = (state) => {
    // console.info('state ::', state)
    // console.log('test', !COMMANDS.includes(inputStr)) 
    if (!doesContainCmd(inputStr)) makeCopy(inputStr)
    setEmulator(state)
    setInput('')
    // playClick()
  }
  // 

  const onInputChange = (value) => {
    // console.info('value ::', value, value.length)
    if (value.length >= CHAR_LIMIT) return
    // setInput(value)
    const textGenerated = fancify(value, 'math mono')
    // console.info('textGenerated ::', textGenerated)
    setInput(textGenerated)
  }

  const handleExecute = () => {
    console.info('inputStr ::', inputStr)
    // console.info('emulatorState ::', emulatorState)
    let newEmulatorState;
    // const currentOutput = OutputFactory.makeTextOutput(inputStr)

    // const defaultHistory = emulatorState.getHistory();
    // const newHistory = History.recordCommand(defaultHistory, currentOutput);
    // newEmulatorState = emulatorState.setHistory(newHistory);

    const defaultOutputs = emulatorState.getOutputs();
    const currentOutput = OutputFactory.makeTextOutput('𝙾𝙺𝚂𝙷-𝟷.𝟶Ξ ' + inputStr);
    const newOutputs = Outputs.addRecord(defaultOutputs, currentOutput);
    newEmulatorState = emulatorState.setOutputs(newOutputs);

    makeCopy(inputStr)
    setEmulator(newEmulatorState)
    setInput('')
    // playClick()
  }

  // const createPromptCommand = () => {
  //   console.info('emulatorState ::', emulatorState)
  //   // let newEmulatorState;
  //   console.dir(CommandMapping.setCommand);
  //   const name = 'test'
  //   const fnDef = (state) => {
  //     console.log(state)
  //     // return state
  //   }
  //   const optDef = {}
    
  //   // CommandMapping.setCommand(
  //   //   emulatorState,
  //   //   name,
  //   //   fnDef,
  //   //   optDef
  //   // )
  //   // setEmulator(newEmulatorState)
  // }

  // useEffect(() => { createPromptCommand() }, [])


  terminalProps['inputStr'] = inputStr
  terminalProps['emulatorState'] = emulatorState
  terminalProps['onStateChange'] = onStateChange
  terminalProps['onInputChange'] = onInputChange


  return {
    isCopied,
    emulatorState, 
    setEmulator,
    inputStr, 
    setInput,
    handleExecute,
    onInputChange,
    onStateChange,
    terminalProps,
  }
}