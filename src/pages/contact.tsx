import React from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout'

import { Container } from '../styles/pages/Contact'

const title = 'Contact'
const subtitle = 'Do you want to hire me?'

const Contact: NextPage = () => {
  return (
    <Layout
      title={`${title} - Media Dev`}
      description={`${title} - ${subtitle}`}
    >
      <Container></Container>
    </Layout>
  )
}

export default Contact
