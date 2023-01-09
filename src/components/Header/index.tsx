import React from 'react'

import IResponsive from '../../interfaces/IResponsive'

import logo from '../../assets/svg/logo_mediadev.svg'

import Link from '../NoScrollLink'
import Menu from '../Menu'

import { Container, Logo } from './styles'

const Header: React.FC<IResponsive> = ({ isBreakpoint }) => {
  return (
    <Container isBreakpoint={isBreakpoint}>
      <Link href="/">
        <Logo background={logo} />
      </Link>
      <Menu />
    </Container>
  )
}

export default Header
