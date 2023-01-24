import React, { useState } from 'react'
// import { useRouter } from 'next/router'
import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Title from '../components/Title'
import BlockButton from '../components/BlockButton'

import background from '../assets/svg/contact_scenario.svg'
import explodedMario from '../assets/svg/exploded_mario.svg'
import whatsapp from '../assets/svg/whatsapp.svg'
import linkedin from '../assets/svg/linkedin.svg'
import gmail from '../assets/svg/gmail.svg'
import github from '../assets/svg/github.svg'

import { Container, Mario, TextContainer, Label } from '../styles/pages/Contact'

const title = 'Contact'
const subtitle = 'Do you want to hire me?'

const Contact: NextPage = () => {
  const [label, setLabel] = useState('')

  const handleClickButton = (e, { href }) => {
    console.log(e)
    e.preventDefault()

    setTimeout(() => {
      // router.push(href)
      window.open(href, '_blank')
    }, 1000)
  }

  return (
    <Layout
      title={`${title} - MEDIA DEV`}
      description={`${title} - ${subtitle}`}
    >
      <Container background={background}>
        <Mario src={explodedMario} alt="mario" />
        <Title title="Get in Touch" isLight={false} />
        <TextContainer>
          <span>Victor Trindade</span>
          <div>
            <BlockButton
              onClick={event =>
                handleClickButton(event, {
                  href: 'https://wa.me/5521982148576'
                })
              }
              onMouseOver={() => setLabel('+55 21 98214-8576')}
              icon={whatsapp}
            />
            <BlockButton
              onClick={event =>
                handleClickButton(event, {
                  href: 'mailto:victortrindade@gmail.com'
                })
              }
              onMouseOver={() => setLabel('victortrindade@gmail.com')}
              icon={gmail}
            />
            <BlockButton
              onClick={event =>
                handleClickButton(event, {
                  href: 'https://www.linkedin.com/in/victorprogramador/'
                })
              }
              onMouseOver={() => setLabel('linkedin.com/in/victorprogramador')}
              icon={linkedin}
            />
            <BlockButton
              onClick={event =>
                handleClickButton(event, {
                  href: 'https://github.com/victortrindade1'
                })
              }
              onMouseOver={() => setLabel('github.com/victortrindade1')}
              icon={github}
            />
          </div>
          <Label>{label}</Label>
        </TextContainer>
      </Container>
    </Layout>
  )
}

export default Contact
