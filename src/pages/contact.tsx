import React from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Title from '../components/Title'
import BlockButton from '../components/BlockButton'

import background from '../assets/svg/contact_scenario.svg'
import explodedMario from '../assets/svg/exploded_mario.svg'
import whatsapp from '../assets/svg/whatsapp.svg'
import linkedin from '../assets/svg/linkedin.svg'
import gmail from '../assets/svg/gmail.svg'
import github from '../assets/svg/github.svg'

import { Container, Mario, TextContainer } from '../styles/pages/Contact'

const title = 'Contact'
const subtitle = 'Do you want to hire me?'

const Contact: NextPage = () => {
  const handleClickButton = () => {}

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
            <BlockButton onClick={handleClickButton} icon={whatsapp} />
            <BlockButton onClick={handleClickButton} icon={gmail} />
            <BlockButton onClick={handleClickButton} icon={linkedin} />
            <BlockButton onClick={handleClickButton} icon={github} />
          </div>
        </TextContainer>
      </Container>
    </Layout>
  )
}

export default Contact
