import React, { ReactNode, useState } from 'react'
import { NextSeo } from 'next-seo'

// import badSun from '../../assets/svg/sol.svg'

import { MainStyled } from './styles'
// import { MainStyled, BadSun, BadSunContainer } from './styles'

type Props = {
  children: ReactNode
  title: string
  description: string
}

// Animation change page
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
}

const Layout = ({ children, title, description }: Props): JSX.Element => {
  const [leftPosition, setLeftPosition] = useState('50')
  const [topPosition, setTopPosition] = useState('-100')

  const handleMoveSun = e => {
    if (leftPosition === '50' && topPosition === '-100') {
      setTimeout(() => {
        setLeftPosition(e.pageX)
        setTopPosition(e.pageY)
      }, 5000)
    } else {
      setLeftPosition(e.pageX)
      setTopPosition(e.pageY)
    }
  }

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <MainStyled
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        className=""
        onMouseMove={e => handleMoveSun(e)}
      >
        {/* <BadSunContainer left={leftPosition} top={topPosition}>
          <BadSun src={badSun} alt="bad sun" />
        </BadSunContainer> */}
        {children}
      </MainStyled>
    </>
  )
}

export default Layout
