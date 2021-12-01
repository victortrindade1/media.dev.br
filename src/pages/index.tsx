import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from '@material-ui/core'

import testJpeg from '../assets/testimage.jpeg'
import testSvg from '../assets/testsvg.svg'

import { DivTestNextImages } from '../styles/pages/Home'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Hellooooo</h1>
        <Button>Teste do Material UI</Button>
        <DivTestNextImages background={testJpeg} />
        <img src={testSvg} alt={'test'} />
      </main>
    </div>
  )
}

export default Home
