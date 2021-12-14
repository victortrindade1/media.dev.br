import React from 'react'

import logo from '../../assets/svg/logo.svg'
import menubutton from '../../assets/svg/menubutton.svg'
import { Container, Logo, MenuButton } from './styles'

import IResponsive from '../../interfaces/IResponsive'

const Header: React.FC<IResponsive> = ({ isBreakpoint }) => {
  return (
    <Container isBreakpoint={isBreakpoint}>
      <Logo src={logo} alt="Media Dev" />
      <MenuButton src={menubutton} alt="menu button" />
    </Container>
  )
}

export default Header
