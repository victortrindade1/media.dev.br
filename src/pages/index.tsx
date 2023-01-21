import React from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout'

import cloudImg from '../assets/svg/nuvem.svg'
import pipe from '../assets/svg/cano.svg'

import {
  Container,
  CloudContainer,
  CloudContainer2,
  ScenarioCloud,
  ScenarioCloud2,
  TextContainer,
  ScenarioPipe
} from '../styles/pages/Home'

const title = 'MEDIA DEV'
const subtitle = 'Software Solution'

const Home: NextPage = () => {
  return (
    <Layout title={title} description={`${title} - ${subtitle}`}>
      <Container>
        <CloudContainer>
          <ScenarioCloud src={cloudImg} alt="cloud" />
        </CloudContainer>
        <CloudContainer2>
          <ScenarioCloud2 src={cloudImg} alt="cloud" />
        </CloudContainer2>
        <TextContainer>
          <p>
            It&apos;s-a me, Mario! I gave up on saving the princess... Now, I
            just want to develop websites, apps and servers.
          </p>
        </TextContainer>
        <ScenarioPipe src={pipe} alt="pipe" />
      </Container>
    </Layout>
  )
}

export default Home
