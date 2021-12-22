import React from 'react'
// import Menu from '@mui/material/Menu'
// import MenuItem from '@mui/material/MenuItem'

import logo from '../../assets/svg/logo_mediadev.svg'
import menubutton from '../../assets/svg/menubutton.svg'
import { Container, Logo, Shake, MenuButton } from './styles'

import IResponsive from '../../interfaces/IResponsive'

const Header: React.FC<IResponsive> = ({ isBreakpoint }) => {
  return (
    <Container isBreakpoint={isBreakpoint}>
      <Logo src={logo} alt="Media Dev" />
      <Shake>
        <MenuButton src={menubutton} alt="menu button" />
      </Shake>
    </Container>
  )
}

export default Header
