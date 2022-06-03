## Snippet

```jsx
  const handleExecute = () => {
    console.info('enter ::', inputStr)
    copy(inputStr)
    // const output = OutputFactory.makeTextOutput(inputStr)
    // setEmulator({ ...emulatorState, output })
    // setEmulator(emulatorState)
    // setInput('')

    const defaultState = Terminal.EmulatorState.createEmpty();
    const defaultOutputs = defaultState.getOutputs();

    const currentOutput = Terminal.OutputFactory.makeTextOutput('added output')
    const newOutputs = Terminal.Outputs.addRecord(defaultOutputs, currentOutput);

    const newEmulatorState = defaultState.setOutputs(newOutputs);
    setEmulator(newEmulatorState)
    // record in terminal ??
    // emulatorState.setOutputs(inputStr)
    // const defaultOutputs = emulatorState.getOutputs()
    // console.log('1 ::', defaultOutputs)
    // const newOutputs = Outputs.addRecord(defaultOutputs, OutputFactory.makeTextOutput(inputStr))
    // console.log('2 ::', newOutputs)
    // emulatorState.setOutputs(newOutputs)
    // // setEmulator(emulatorState)
    // console.dir(emulatorState)
    // setEmulator({ state: emulatorState, output })
  }
```