import {
  // EmulatorState, 
  OutputFactory, 
  // CommandMapping,
  // EnvironmentVariables, 
  // FileSystem, 
  // History, 
  // Outputs, 
  // defaultCommandMapping,
} from 'javascript-terminal'

const optDef = {}

const fnDef = (state, commandOptions) => {
  console.info('print ::', state, commandOptions)
  const input = commandOptions.join(' ')
  // const outputStr = substituteEnvVariables(state.getEnvVariables(), input)
  // const cleanStr = outputStr.trim().replace(DOUBLE_SPACE_REGEX, ' ')
  const output = OutputFactory.makeTextOutput(input)
  return { output }
}

export default {
  function: fnDef,
  optDef,
}