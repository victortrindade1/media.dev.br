import styled from 'styled-components'

import IResponsive from '../../interfaces/IResponsive'

export const Container = styled.div<IResponsive>`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`

export const Logo = styled.img`
  width: 80px;
`

export const MenuButton = styled.img`
  width: 50px;
`
