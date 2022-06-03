import {
  History,
  OutputFactory, 
  OptionParser,
} from 'javascript-terminal'

// remove history entries
const optDef = {
  '-c, --clear': '',
}

const clearStateHistory = (state) => (
  state.setHistory(History.create())
)

const stringifyStateHistory = (state) => (
  state.getHistory().join('\n')
)

const fnDef = (state, commandOptions) => {
  console.info('history ::', state, commandOptions)
  const { argv } = OptionParser.parseOptions(commandOptions, optDef);

  if (argv.length) return { state: clearStateHistory(state) }

  const viewHistory = stringifyStateHistory(state)
  const output = OutputFactory.makeTextOutput(viewHistory)
 
  return { output }
}

export default {
  function: fnDef,
  optDef,
}