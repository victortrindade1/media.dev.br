import React from 'react'

import logo from '../../assets/svg/logo_mediadev.svg'
import { Container, Logo } from './styles'

import IResponsive from '../../interfaces/IResponsive'
import Menu from '../Menu'

const Header: React.FC<IResponsive> = ({ isBreakpoint }) => {
  return (
    <Container isBreakpoint={isBreakpoint}>
      <Logo src={logo} alt="Media Dev" />
      <Menu />
    </Container>
  )
}

export default Header
