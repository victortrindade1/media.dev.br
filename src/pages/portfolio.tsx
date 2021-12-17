import React from 'react'
import type { NextPage } from 'next'
import { ArrowDropDown } from '@material-ui/icons'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core'

import Layout from '../components/Layout'
import Title from '../components/Title'

import scenario from '../assets/svg/moita.svg'

import {
  Container,
  Scenario,
  PortfolioContainer,
  ListPortfolio,
  ItemPortfolio
} from '../styles/pages/Portfolio'

const title = 'Portfolio'
const subtitle = 'Only awesome pages!'

const listPortfolio = [
  {
    title: 'Gente Odontologia Humanizada',
    data: {
      mobile: '',
      desktop: ''
    }
  }
]

const Portfolio: NextPage = () => {
  return (
    <Layout
      title={`${title} - Media Dev`}
      description={`${title} - ${subtitle}`}
    >
      <Container>
        <Title title="Portfolio" isLight />
        <PortfolioContainer>
          <ListPortfolio>
            {listPortfolio.map(item => (
              <ItemPortfolio key={item.title}>
                <Accordion square>
                  <AccordionSummary
                    expandIcon={
                      <ArrowDropDown fontSize={'large'} color={'info'} />
                    }
                  >
                    {item.title}
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ background: '#e4e4e4', lineHeight: '1.6' }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Recusandae quis assumenda distinctio maiores sit illo eos,
                    nam sapiente officia vel laborum neque veritatis sunt
                    tempore voluptatem ipsam hic labore consequuntur.
                  </AccordionDetails>
                </Accordion>
              </ItemPortfolio>
            ))}
          </ListPortfolio>
        </PortfolioContainer>
        <Scenario src={scenario} alt={'Scenario'} />
      </Container>
    </Layout>
  )
}

export default Portfolio
