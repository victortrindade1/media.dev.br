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
import star from '../assets/svg/star_skill.svg'
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
  StarIcon,
  ResponsiveDiv,
  PresentationContainer,
  SkillContainer,
  ListSubcategories,
  Subcategory,
  ListItems,
  ItemSkill,
  Skeleton
} from '../styles/pages/Aboutme'

const title = 'About Me'
const subtitle =
  "Hi, my name is Victor Trindade. I'm a software developer at Brazil."

const listSkills = [
  {
    category: 'LANGUAGES',
    list: [
      {
        subcategory: 'Frequently used',
        items: ['Typescript', 'Javascript (ES6+)', 'HTML/CSS']
      },
      {
        subcategory: 'Less used',
        items: ['VBA (Excel)']
      }
    ]
  },
  {
    category: 'FRONT-END',
    list: [
      {
        subcategory: 'Frameworks',
        items: ['React', 'React Native', 'NextJS']
      },
      {
        subcategory: 'Most used libs',
        items: [
          'ContextAPI',
          'Styled Components',
          'Material UI',
          'Axios',
          'React-Hook-Form',
          'ReduxToolkit',
          'Yup'
        ]
      }
    ]
  },
  {
    category: 'BACK-END',
    list: [
      {
        subcategory: 'Environments',
        items: ['NodeJS']
      },
      {
        subcategory: 'Frameworks',
        items: ['ExpressJS']
      },
      {
        subcategory: 'Most used libs',
        items: [
          'Sequelize',
          'JWT',
          'Bcrypt',
          'Yup',
          'Jest',
          'Cors',
          'DotEnv',
          'Sentry',
          'Helmet',
          'Axios',
          'MongoDB',
          'Redis'
        ]
      }
    ]
  },
  {
    category: 'DESIGN',
    list: [
      {
        subcategory: 'Web Design',
        items: ['Figma', 'Inkscape', 'Corel Draw']
      }
    ]
  },
  {
    category: 'OTHER STUFFS',
    list: [
      {
        subcategory: 'Systems',
        items: ['Linux', 'iOS', 'Windows']
      },
      {
        subcategory: 'Web Services',
        items: ['Docker', 'Github', 'WordPress']
      },
      {
        subcategory: 'Softwares',
        items: ['VS Code', 'Insomnia', 'Postbird']
      }
    ]
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
                <a
                  href="https://github.com/victortrindade1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub />
                </a>
                <a
                  href="https://www.linkedin.com/in/victorprogramador/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn />
                </a>
                <a
                  href="https://wa.me/5521982148576"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsApp />
                </a>
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
            <Subtitle>
              <StarIcon src={star} alt="star" />
              SKILLS
              <StarIcon src={star} alt="star" />
            </Subtitle>
            <ListSkills>
              {listSkills.map((skill, id) => (
                <Skill key={skill.category}>
                  <Accordion square key={id}>
                    <AccordionSummary
                      expandIcon={
                        <ArrowDropDown fontSize={'large'} color={'info'} />
                      }
                    >
                      {skill.category}
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ background: '#000', color: '#fff' }}
                    >
                      <ListSubcategories>
                        {skill.list.map((subcategory, id) => (
                          <Subcategory key={id}>
                            <Accordion square key={id} defaultExpanded>
                              <AccordionSummary
                                expandIcon={
                                  <ArrowDropDown
                                    fontSize={'large'}
                                    color={'info'}
                                  />
                                }
                              >
                                {subcategory.subcategory}
                              </AccordionSummary>
                              <AccordionDetails
                                sx={{ background: '#000', color: '#fff' }}
                              >
                                <ListItems>
                                  {subcategory.items.map((item, id) => (
                                    <ItemSkill key={id}>
                                      <span>
                                        <Skeleton background={skeleton} />
                                      </span>
                                      <div>{item}</div>
                                    </ItemSkill>
                                  ))}
                                </ListItems>
                              </AccordionDetails>
                            </Accordion>
                          </Subcategory>
                        ))}
                      </ListSubcategories>
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
