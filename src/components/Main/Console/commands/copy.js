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
  const newInput = input.replace('𝚌𝚘𝚙𝚢', '')
  copy(newInput)
  const output = OutputFactory.makeTextOutput('𝙾𝙺𝚂𝙷-𝟷.𝟶Ξ ' + newInput)
  return { output }
}
// 
export default {
  function: fnDef,
  optDef,
}
// 𝚌𝚘𝚙𝚢 𝚜𝚜
// 𝚌𝚘𝚙𝚢 𝚜𝚜 𝚜𝚜
// 𝚍𝚍𝚌𝚌𝚜 𝚊𝚜𝚊𝚜𝚊
