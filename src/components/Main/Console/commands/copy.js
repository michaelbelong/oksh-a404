import {
  OutputFactory, 
} from 'javascript-terminal'
import copy from 'copy-to-clipboard'
// import { COPY_LABEL } from '../../../../custom'

const optDef = {}

const fnDef = (state, commandOptions) => {
  // commandOptions.pop()
  console.info('copy ::', state, commandOptions)
  const input = commandOptions.join(' ')
  console.log('input', input)
  const newInput = input.replace('ππππ’', '')
  copy(newInput)
  const output = OutputFactory.makeTextOutput('πΎπΊππ·-π·.πΆΞ ' + newInput)
  return { output }
}
// 
export default {
  function: fnDef,
  optDef,
}
// ππππ’ ππ
// ππππ’ ππ ππ
// πππππ πππππ
