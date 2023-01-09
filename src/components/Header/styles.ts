import styled, { keyframes } from 'styled-components'

import IResponsive from '../../interfaces/IResponsive'

import logo from '../../assets/svg/logo_mediadev.svg'
import logo2 from '../../assets/svg/logo_mediadev2.svg'
import logo3 from '../../assets/svg/logo_mediadev3.svg'

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

const logoAnimation = keyframes`
  0% {
    background: url(${logo}) no-repeat center;
   }
   19% {
    background: url(${logo}) no-repeat center;
   }
   20% {
    background: url(${logo2}) no-repeat center;
   }
   22% {
    background: url(${logo3}) no-repeat center;
   }
   24% {
    background: url(${logo2}) no-repeat center;
   }
   26% {
    background: url(${logo3}) no-repeat center;
   }
   28% {
    background: url(${logo2}) no-repeat center;
   }
   30% {
    background: url(${logo3}) no-repeat center;
   }
   32% {
    background: url(${logo}) no-repeat center;
   }
  100% { background: url(${logo}) no-repeat center; }
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
interface IContainer {
  background: any
}

export const Logo = styled.div<IContainer>`
  width: 70px;
  height: 70px;
  background: url('${props => props.background}') no-repeat center;
  animation: ${logoAnimation} 5s infinite;

  :hover {
    cursor: pointer;
  }
`

export const Shake = styled.div`
  animation: ${shakeAnimation} 4.72s ease infinite;
  transform-origin: 50% 50%;
`

export const MenuButton = styled.img`
  width: 50px;
`
