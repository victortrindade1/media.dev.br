import React from 'react'
import type { NextPage } from 'next'
import { GitHub, LinkedIn, WhatsApp } from '@material-ui/icons'

import Layout from '../components/Layout'
import Title from '../components/Title'

import background from '../assets/svg/montanhas.svg'
import avatar from '../assets/img/avatar.jpeg'

import IResponsive from '../interfaces/IResponsive'

import {
  Container,
  Avatar,
  AvatarContainer,
  SocialMediaContainer,
  DescriptionContainer,
  Subtitle,
  SkillBox,
  // FlexRowDiv,
  ResponsiveDiv,
  PresentationContainer,
  SkillContainer
} from '../styles/pages/Aboutme'

const title = 'About Me'
const subtitle =
  "Hi, my name is Victor Trindade. I'm a software developer at Brazil."

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
          <PresentationContainer>
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
                Hi, my name is Victor Trindade (yes, I&apos;m not Mario...).
                I&apos;m a software developer at Rio de Janeiro, Brazil. If
                you&apos;re interested, please contact me!
              </p>
            </DescriptionContainer>
          </PresentationContainer>
          <SkillContainer>
            <Subtitle>SKILLS</Subtitle>
            <SkillBox>FRONT-END</SkillBox>
            <SkillBox>BACK-END</SkillBox>
            <SkillBox>STUFFS</SkillBox>
          </SkillContainer>
          {/* </FlexRowDiv> */}
        </ResponsiveDiv>
      </Container>
    </Layout>
  )
}

export default Aboutme
