import React, { useState } from 'react'
// import fileDownload from 'js-file-download';

import menubutton from '../../assets/svg/menubutton.svg'
import menuTop from '../../assets/svg/agua_menu_cima.svg'
import menuBottom from '../../assets/svg/agua_menu_baixo.svg'
import menuItemPlatform from '../../assets/svg/plataforma.svg'
import itemIconYellow from '../../assets/svg/exclamacao_amarela.svg'
import itemIconPurple from '../../assets/svg/exclamacao_roxa.svg'
import itemIconGreen from '../../assets/svg/exclamacao_verde.svg'
import itemIconRed from '../../assets/svg/exclamacao_vermelha.svg'
// import curriculo from '../../assets/pdf/curriculo.pdf'
import Link from '../NoScrollLink'

import {
  Container,
  Shake,
  ButtonContainer,
  StyledDrawer,
  MenuBackgroundBottom,
  MenuBackgroundTop,
  MenuItemContainer,
  ItemIcon
} from './styles'
import BlockButton from '../BlockButton'
import IResponsive from '../../interfaces/IResponsive'

const links: { name: string; href: string; icon: string }[] = [
  {
    name: 'About me',
    href: '/aboutme',
    icon: itemIconYellow
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
    icon: itemIconRed
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: itemIconGreen
  },
  {
    name: 'Resume',
    href: '/resume.pdf',
    icon: itemIconPurple
  }
]

const Menu: React.FC<IResponsive> = ({ isBreakpoint }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpened(!isMenuOpened)
  }

  return (
    <Container>
      <Shake>
        <ButtonContainer>
          <BlockButton isMenu onClick={handleToggleMenu} icon={menubutton} />
        </ButtonContainer>
      </Shake>
      <StyledDrawer
        anchor={'bottom'}
        open={isMenuOpened}
        onClose={handleToggleMenu}
      >
        <MenuBackgroundTop background={menuTop} />
        <MenuBackgroundBottom
          background={menuBottom}
          isBreakpoint={isBreakpoint}
        >
          <nav>
            {links.map(({ name, href, icon }) => (
              <Link key={href} href={href}>
                <MenuItemContainer
                  background={menuItemPlatform}
                  onClick={handleToggleMenu}
                >
                  <ItemIcon src={icon} alt="Exclamation Icon" />
                  <a>{name}</a>
                </MenuItemContainer>
              </Link>
            ))}
          </nav>
        </MenuBackgroundBottom>
      </StyledDrawer>
    </Container>
  )
}

export default Menu
