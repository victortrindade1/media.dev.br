import React from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout'

import cloudImg from '../assets/svg/nuvem.svg'
import pipe from '../assets/svg/cano.svg'

import {
  Container,
  ScenarioCloud,
  TextContainer,
  ScenarioPipe
} from '../styles/pages/Home'

const title = 'Media Dev'
const subtitle = 'Software Solution'

const Home: NextPage = () => {
  return (
    <Layout title={title} description={`${title} - ${subtitle}`}>
      <Container>
        <ScenarioCloud src={cloudImg} alt="cloud" />
        <TextContainer>
          <p>
            Hi, it&apos;s me, Mario! I gave up on saving the princess... Now I
            just want to develop websites and apps.
          </p>
        </TextContainer>
        <ScenarioPipe src={pipe} alt="pipe" />
      </Container>
    </Layout>
  )
}

export default Home
