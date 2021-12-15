import React from 'react'

import { Container } from './styles'

interface ITitle {
  title: string
  isLight: boolean
}

const Title: React.FC<ITitle> = ({ title, isLight }: ITitle) => {
  return (
    <Container isLight={isLight}>
      <h1>{title}</h1>
    </Container>
  )
}

export default Title
