import React, { useState } from 'react'
import { Container, Input, Text, Button } from '@chakra-ui/react'
import copy from 'copy-to-clipboard'
import { transform } from '../../custom'

const TestInput = () => {
  const [text, setText] = useState('')
  
  const handleTextChange = (e) => {
    const value = e.target.value
    // setText(value)
    const genText = transform(value)
    // console.info('gen text ::', genText)
    setText(genText)
  }

  const handleCopyToClipBoard = () => copy(text)

  return (
    <Container>
      <Input value={text} onChange={handleTextChange} placeholder="type anything" />
      <Text p={4}>{text}</Text>
      <Button color="black" onClick={handleCopyToClipBoard}>COPY</Button>
    </Container>
  )
}

export { TestInput }