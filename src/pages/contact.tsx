import React from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Title from '../components/Title'

import background from '../assets/svg/contact_scenario.svg'
import explodedMario from '../assets/svg/exploded_mario.svg'

import { Container, Mario, TextContainer } from '../styles/pages/Contact'

const title = 'Contact'
const subtitle = 'Do you want to hire me?'

const Contact: NextPage = () => {
  return (
    <Layout
      title={`${title} - Media Dev`}
      description={`${title} - ${subtitle}`}
    >
      <Container background={background}>
        <Mario src={explodedMario} alt="mario" />
        <Title title="Get in Touch" isLight={false} />
        <TextContainer>
          <p>
            It&apos;s-a me, Mario! I gave up on saving the princess... Now, I
            just want to develop websites, apps and servers.
          </p>
        </TextContainer>
      </Container>
    </Layout>
  )
}

export default Contact
