import './footer.css'
import React from 'react'
import { Container, Link } from '@chakra-ui/react'
import { SOCIAL_LINKS, SoundConsumer } from '../../custom'

const Footer = () => {
  const { playClick } = SoundConsumer()
  const handleClick = () => playClick()

  return (
    <footer>
      <Container maxW="container.lg" color="ui.gray.500">
        {SOCIAL_LINKS.map((item) => (
          <Link 
            key={item.key} 
            target="_blank" 
            href={item.link}
            onClick={handleClick}
          >{item.text}</Link>
        ))}
      </Container>
    </footer>
  )
};

export { Footer }