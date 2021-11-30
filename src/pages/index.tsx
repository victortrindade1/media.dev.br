import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from '@material-ui/core'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Hellooooo</h1>
        <Button>Teste do Material UI</Button>
      </main>
    </div>
  )
}

export default Home
