import React from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Title from '../components/Title'

import background from '../assets/svg/contact_scenario.svg'
import explodedMario from '../assets/svg/exploded_mario.svg'
import whatsapp from '../assets/svg/whatsapp.svg'
import linkedin from '../assets/svg/linkedin.svg'
import gmail from '../assets/svg/gmail.svg'
import github from '../assets/svg/github.svg'

import {
  Container,
  Mario,
  TextContainer,
  IconContainer,
  Icon
} from '../styles/pages/Contact'

const title = 'Contact'
const subtitle = 'Do you want to hire me?'

const Contact: NextPage = () => {
  const handleClick = () => {
    return console.log('ui')
  }

  return (
    <Layout
      title={`${title} - Media Dev`}
      description={`${title} - ${subtitle}`}
    >
      <Container background={background}>
        <Mario src={explodedMario} alt="mario" />
        <Title title="Get in Touch" isLight={false} />
        <TextContainer>
          <span>Victor Trindade</span>
          <div>
            <IconContainer onClick={handleClick}>
              <Icon src={whatsapp} alt="whatsapp" />
            </IconContainer>
            <IconContainer>
              <Icon src={gmail} alt="e-mail" />
            </IconContainer>
            <IconContainer>
              <Icon src={linkedin} alt="linkedin" />
            </IconContainer>
            <IconContainer>
              <Icon src={github} alt="github" />
            </IconContainer>
          </div>
        </TextContainer>
      </Container>
    </Layout>
  )
}

export default Contact
