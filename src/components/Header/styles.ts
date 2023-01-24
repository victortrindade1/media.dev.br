import styled, { keyframes } from 'styled-components'

import IResponsive from '../../interfaces/IResponsive'

import logo from '../../assets/svg/logo_mediadev.svg'
import logo2 from '../../assets/svg/logo_mediadev2.svg'
import logo3 from '../../assets/svg/logo_mediadev3.svg'

const shakeAnimation = keyframes`
  0% {
    -moz-transform:translate(0,0);
    -webkit-transform:translate(0,0);
    transform:translate(0,0);
  }
  1.78571% {
    -moz-transform:translate(10px,0);
    -webkit-transform:translate(10px,0);
    transform:translate(10px,0);
  }
  3.57143% {
    -moz-transform:translate(0,0);
    -webkit-transform:translate(0,0);
    transform:translate(0,0);
  }
  5.35714% {
    -moz-transform:translate(10px,0);
    -webkit-transform:translate(10px,0);
    transform:translate(10px,0);
  }
  7.14286% {
    -moz-transform:translate(0,0);
    -webkit-transform:translate(0,0);
    transform:translate(0,0);
  }
  8.92857% {
    -moz-transform:translate(10px,0);
    -webkit-transform:translate(10px,0);
    transform:translate(10px,0);
  }
  10.71429% {
    -moz-transform:translate(0,0);
    -webkit-transform:translate(0,0);
    transform:translate(0,0);
  }
  100% {
    -moz-transform:translate(0,0);
    -webkit-transform:translate(0,0);
    transform:translate(0,0);
    }
`

const logoAnimation = keyframes`
  0% {
    -moz-background: url(${logo}) no-repeat center;
    -webkit-background: url(${logo}) no-repeat center;
    background: url(${logo}) no-repeat center;
   }
   19% {
    -moz-background: url(${logo}) no-repeat center;
    -webkit-background: url(${logo}) no-repeat center;
    background: url(${logo}) no-repeat center;
   }
   20% {
    -moz-background: url(${logo2}) no-repeat center;
    -webkit-background: url(${logo2}) no-repeat center;
    background: url(${logo2}) no-repeat center;
   }
   22% {
    -moz-background: url(${logo3}) no-repeat center;
    -webkit-background: url(${logo3}) no-repeat center;
    background: url(${logo3}) no-repeat center;
   }
   24% {
    -moz-background: url(${logo2}) no-repeat center;
    -webkit-background: url(${logo2}) no-repeat center;
    background: url(${logo2}) no-repeat center;
   }
   26% {
    -moz-background: url(${logo3}) no-repeat center;
    -webkit-background: url(${logo3}) no-repeat center;
    background: url(${logo3}) no-repeat center;
   }
   28% {
    -moz-background: url(${logo2}) no-repeat center;
    -webkit-background: url(${logo2}) no-repeat center;
    background: url(${logo2}) no-repeat center;
   }
   30% {
    -moz-background: url(${logo3}) no-repeat center;
    -webkit-background: url(${logo3}) no-repeat center;
    background: url(${logo3}) no-repeat center;
   }
   32% {
    -moz-background: url(${logo}) no-repeat center;
    -webkit-background: url(${logo}) no-repeat center;
    background: url(${logo}) no-repeat center;
   }
  100% {
    -moz-background: url(${logo}) no-repeat center;
    -webkit-background: url(${logo}) no-repeat center;
    background: url(${logo}) no-repeat center;
  }

`

export const Container = styled.div<IResponsive>`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
interface IContainer {
  background: any
}

export const Logo = styled.div<IContainer>`
  width: 70px;
  height: 70px;
  -moz-background: url('${props => props.background}') no-repeat center;
  -webkit-background: url('${props => props.background}') no-repeat center;
  background: url('${props => props.background}') no-repeat center;
  -moz-animation: ${logoAnimation} 5s infinite;
  -webkit-animation: ${logoAnimation} 5s infinite;
  animation: ${logoAnimation} 5s infinite;

  :hover {
    cursor: pointer;
  }
`

export const Shake = styled.div`
  -moz-animation: ${shakeAnimation} 4.72s ease infinite;
  -webkit-animation: ${shakeAnimation} 4.72s ease infinite;
  animation: ${shakeAnimation} 4.72s ease infinite;
  -moz-transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
`

export const MenuButton = styled.img`
  width: 50px;
`
