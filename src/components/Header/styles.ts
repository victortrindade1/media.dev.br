import styled, { keyframes } from 'styled-components'

import IResponsive from '../../interfaces/IResponsive'

const shakeAnimation = keyframes`
  0% { transform:translate(0,0) }
  1.78571% { transform:translate(10px,0) }
  3.57143% { transform:translate(0,0) }
  5.35714% { transform:translate(10px,0) }
  7.14286% { transform:translate(0,0) }
  8.92857% { transform:translate(10px,0) }
  10.71429% { transform:translate(0,0) }
  100% { transform:translate(0,0) }
`

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
  /* width: 80px; */
  height: 70px;
`

export const Shake = styled.div`
  animation: ${shakeAnimation} 4.72s ease infinite;
  transform-origin: 50% 50%;
`

export const MenuButton = styled.img`
  width: 50px;
`
