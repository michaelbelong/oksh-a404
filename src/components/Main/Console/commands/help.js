import {
  OutputFactory, 
} from 'javascript-terminal'
import { BODY_TABLE } from '../../../../custom'

// isolate padding width here
const HELP_CMD = BODY_TABLE.commands.col

const optDef = {}

const stringifyStateHelp = () => (
  HELP_CMD.reduce((curr, acc) => (
    // curr + acc.command.padEnd(acc.pad) + '-- ' + acc.description + '\n'
    curr + `${acc.command} -- ${acc.description}\n`
  ), '')
)

const fnDef = (state, commandOptions) => {
  console.info('help ::', state, commandOptions)

  const viewHelp = stringifyStateHelp()
  const output = OutputFactory.makeTextOutput(viewHelp)
 
  return { output }
}

export default {
  function: fnDef,
  optDef,
}