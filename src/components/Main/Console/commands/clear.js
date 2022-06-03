import {
  Outputs, 
} from 'javascript-terminal'

const optDef = {}

const clearStateConsole = (state) => (
  state.setOutputs(Outputs.create())
)

const fnDef = (state, commandOptions) => {
  console.info('clear ::', state, commandOptions)
  return { state: clearStateConsole(state) }
}

export default {
  function: fnDef,
  optDef,
}