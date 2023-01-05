import React from 'react'
import type { NextPage } from 'next'
import { GitHub, LinkedIn, ArrowDropDown, WhatsApp } from '@material-ui/icons'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core'

import Layout from '../components/Layout'
import Title from '../components/Title'

import background from '../assets/svg/montanhas.svg'
import skeleton from '../assets/svg/skeleton.svg'
import skeleton_dead from '../assets/svg/skeleton_dead.svg'
import avatar from '../assets/img/avatar.jpeg'

import IResponsive from '../interfaces/IResponsive'

import {
  Container,
  Avatar,
  AvatarContainer,
  SocialMediaContainer,
  DescriptionContainer,
  Subtitle,
  // SkillBox,
  // FlexRowDiv,
  ListSkills,
  Skill,
  ResponsiveDiv,
  PresentationContainer,
  SkillContainer,
  ListItems,
  ItemSkill,
  Skeleton
} from '../styles/pages/Aboutme'

const title = 'About Me'
const subtitle =
  "Hi, my name is Victor Trindade. I'm a software developer at Brazil."

const listSkills = [
  {
    category: 'FRONT-END',
    items: ['React', 'React Native', 'Redux', 'NextJS', 'Typescript']
  },
  {
    category: 'BACK-END',
    items: [
      'NodeJS',
      'Express',
      'Docker',
      'MongoDB',
      'Postgres',
      'Redis',
      'Insomnia'
    ]
  },
  {
    category: 'STUFFS',
    items: ['Github', 'TDD', 'SOLID']
  }
]

const Aboutme: NextPage<IResponsive> = ({ isBreakpoint }: IResponsive) => {
  return (
    <Layout
      title={`${title} - Media Dev`}
      description={`${title} - ${subtitle}`}
    >
      <Container background={background}>
        <Title title="About me" isLight />
        <ResponsiveDiv isBreakpoint={isBreakpoint}>
          {/* <FlexRowDiv> */}
          <PresentationContainer isBreakpoint={isBreakpoint}>
            <AvatarContainer>
              <Avatar src={avatar} alt="Avatar Photo" />
              <SocialMediaContainer>
                <GitHub fontSize={'large'} color={'info'} />
                <LinkedIn fontSize={'large'} color={'info'} />
                <WhatsApp fontSize={'large'} color={'info'} />
              </SocialMediaContainer>
            </AvatarContainer>
            <DescriptionContainer>
              <p>
                Actually, I&apos;m not Mario... My name is Victor Trindade.
                I&apos;m a software developer at Rio de Janeiro, Brazil. If
                you&apos;re interested, please contact me!
              </p>
            </DescriptionContainer>
          </PresentationContainer>
          <SkillContainer isBreakpoint={isBreakpoint}>
            <Subtitle>SKILLS</Subtitle>
            <ListSkills>
              {listSkills.map(item => (
                <Skill key={item.category}>
                  <Accordion square>
                    <AccordionSummary
                      expandIcon={
                        <ArrowDropDown fontSize={'large'} color={'info'} />
                      }
                    >
                      {item.category}
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ background: '#000', color: '#fff' }}
                    >
                      <ListItems>
                        {item.items.map((item, id) => (
                          <ItemSkill key={id} backgroundHover={skeleton_dead}>
                            <span>
                              <Skeleton background={skeleton} />
                            </span>
                            <div>{item}</div>
                          </ItemSkill>
                        ))}
                      </ListItems>
                    </AccordionDetails>
                  </Accordion>
                </Skill>
              ))}
            </ListSkills>
          </SkillContainer>
        </ResponsiveDiv>
      </Container>
    </Layout>
  )
}

export default Aboutme
