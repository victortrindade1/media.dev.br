import styled from 'styled-components'

import IResponsive from '../../interfaces/IResponsive'

export const Container = styled.div<IResponsive>`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

export const Logo = styled.img`
  width: 80px;
`

export const MenuButton = styled.img`
  width: 50px;
`
