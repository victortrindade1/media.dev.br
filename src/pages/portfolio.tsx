import React from 'react'
import type { NextPage } from 'next'
import { ArrowDropDown, GitHub, OpenInNew } from '@material-ui/icons'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core'

import Layout from '../components/Layout'
import Title from '../components/Title'

import scenario from '../assets/svg/moita.svg'
import mobileScreen1 from '../assets/gif/gente_odontologia_mobile.gif'
import desktopScreen1 from '../assets/gif/gente_odontologia_desktop.gif'

import {
  Container,
  Scenario,
  PortfolioContainer,
  ListPortfolio,
  ItemPortfolio,
  ItemContainer,
  ItemDescription,
  ItemSkills,
  Skill,
  Grid,
  GridColumn,
  GridTitle,
  GridBody,
  LinkContainer,
  MobileScreenContainer,
  DesktopScreenContainer,
  MobileScreen,
  DesktopScreen
} from '../styles/pages/Portfolio'
import IResponsive from '../interfaces/IResponsive'

const title = 'Portfolio'
const subtitle = 'Only awesome pages!'

const listPortfolio = [
  {
    title: '',
    description: '',
    skills: [],
    links: {
      github: '',
      url: ''
    },
    gifs: {
      mobile: '',
      desktop: ''
    }
  }
  // {
  //   title: 'Gente Odontologia Humanizada',
  //   description: 'Dental office website',
  //   skills: ['NextJS', 'TypeScript', 'Styled Components', 'MaterialUI'],
  //   links: {
  //     github: 'https://github.com/victortrindade1/ultraoral-web',
  //     url: 'https://genteodontologia-web.vercel.app/'
  //   },
  //   gifs: {
  //     mobile: mobileScreen1,
  //     desktop: desktopScreen1
  //   }
  // }
]

const Portfolio: NextPage<IResponsive> = ({ isBreakpoint }: IResponsive) => {
  return (
    <Layout
      title={`${title} - MEDIA DEV`}
      description={`${title} - ${subtitle}`}
    >
      <Container isBreakpoint={isBreakpoint}>
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
                    sx={{ background: '#000', lineHeight: '1.6' }}
                  >
                    <ItemContainer>
                      <ItemDescription>{item.description}</ItemDescription>
                      <ItemSkills>
                        {item.skills.map(skill => (
                          <Skill key={skill}>{skill}</Skill>
                        ))}
                      </ItemSkills>
                      <Grid isBreakpoint={isBreakpoint}>
                        <GridColumn>
                          <GridBody isBreakpoint={isBreakpoint}>
                            <LinkContainer isBreakpoint={isBreakpoint}>
                              <a
                                href={item.links.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <OpenInNew />
                              </a>
                              <a
                                href={item.links.github}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <GitHub />
                              </a>
                            </LinkContainer>
                          </GridBody>
                        </GridColumn>
                        <GridColumn>
                          <GridTitle>Mobile:</GridTitle>
                          <GridBody isBreakpoint={isBreakpoint}>
                            <MobileScreenContainer isBreakpoint={isBreakpoint}>
                              <MobileScreen
                                src={item.gifs.mobile}
                                alt="Mobile screen"
                              />
                            </MobileScreenContainer>
                          </GridBody>
                        </GridColumn>
                        <GridColumn>
                          <GridTitle>Desktop:</GridTitle>
                          <GridBody isBreakpoint={isBreakpoint}>
                            <DesktopScreenContainer>
                              <DesktopScreen
                                src={item.gifs.desktop}
                                alt="Desktop screen"
                              />
                            </DesktopScreenContainer>
                          </GridBody>
                        </GridColumn>
                      </Grid>
                    </ItemContainer>
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
