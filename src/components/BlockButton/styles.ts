import styled, { keyframes } from 'styled-components'
import React from 'react'

import moeda1 from '../../assets/svg/moeda1.svg'
import moeda2 from '../../assets/svg/moeda2.svg'
import moeda3 from '../../assets/svg/moeda3.svg'
import moeda4 from '../../assets/svg/moeda4.svg'
import button1 from '../../assets/svg/button1.svg'
import button2 from '../../assets/svg/button2.svg'
import button3 from '../../assets/svg/button3.svg'
import button4 from '../../assets/svg/button4.svg'

interface IBlockButtonContainer {
  isClicked: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const iconAnimation = keyframes`
  0% {
    -moz-transform:translate(0,0);
    -webkit-transform:translate(0,0);
    transform:translate(0,0);
  }
  1% {
    -moz-transform:translate(0,-10px);
    -webkit-transform:translate(0,-10px);
    transform:translate(0,-10px);
  }
  2% {
    -moz-transform:translate(0,10px);
    -webkit-transform:translate(0,10px);
    transform:translate(0,10px);
  }
  6% {
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

const coin3Animation = keyframes`
  0% {
    opacity: 0;
   }
  10% {
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  20% {
    top: -150px;
  }
  22% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

const coin2Animation = keyframes`
  0% {
    opacity: 0
   }
   4% {
    opacity: 0
   }
   8% {
     opacity: 1
   }
   25% {
    opacity: 0
   }
   100% {
     opacity: 0
   }
`

const coinAnimation = keyframes`
  0% {
    -moz-background: url(${moeda2}) no-repeat center;
    -webkit-background: url(${moeda2}) no-repeat center;
    background: url(${moeda2}) no-repeat center;
    opacity: 1
   }
  2% {
    top: -90px
  }
  2.01% {
    -moz-background: url(${moeda1}) no-repeat center;
    -webkit-background: url(${moeda1}) no-repeat center;
    background: url(${moeda1}) no-repeat center;
    top: -90px
  }
  4% {
    top: -100px;
  }
  4.01% {
    -moz-background: url(${moeda2}) no-repeat center;
    -webkit-background: url(${moeda2}) no-repeat center;
    background: url(${moeda2}) no-repeat center;
    top: -100px;
  }
  6% {
    top: -120px;
  }
  8% {
    top: -100px;
    opacity: 1
  }
  8.01% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

const interrogationAnimation = keyframes`
  0% {
    -moz-background: url(${button1}) no-repeat center;
    -webkit-background: url(${button1}) no-repeat center;
    background: url(${button1}) no-repeat center;
  }
  24.999% {
    -moz-background: url(${button1}) no-repeat center;
    -webkit-background: url(${button1}) no-repeat center;
    background: url(${button1}) no-repeat center;
  }
  25% {
    -moz-background: url(${button2}) no-repeat center;
    -webkit-background: url(${button2}) no-repeat center;
    background: url(${button2}) no-repeat center;
  }
  49.999% {
    -moz-background: url(${button2}) no-repeat center;
    -webkit-background: url(${button2}) no-repeat center;
    background: url(${button2}) no-repeat center;
  }
  50% {
    -moz-background: url(${button3}) no-repeat center;
    -webkit-background: url(${button3}) no-repeat center;
    background: url(${button3}) no-repeat center;
  }
  74.999% {
    -moz-background: url(${button3}) no-repeat center;
    -webkit-background: url(${button3}) no-repeat center;
    background: url(${button3}) no-repeat center;
  }
  75% {
    -moz-background: url(${button4}) no-repeat center;
    -webkit-background: url(${button4}) no-repeat center;
    background: url(${button4}) no-repeat center;
  }
  99.999% {
    -moz-background: url(${button4}) no-repeat center;
    -webkit-background: url(${button4}) no-repeat center;
    background: url(${button4}) no-repeat center;
  }
`

export const Container = styled.div<IBlockButtonContainer>`
  position: relative;
  -moz-animation: ${props => props.isClicked && iconAnimation} 5s ease;
  -webkit-animation: ${props => props.isClicked && iconAnimation} 5s ease;
  animation: ${props => props.isClicked && iconAnimation} 5s ease;

  :hover {
    cursor: pointer;
  }
`

export const Moeda = styled.div<IBlockButtonContainer>`
  -moz-animation: ${props => props.isClicked && coinAnimation} 5s ease-in;
  -webkit-animation: ${props => props.isClicked && coinAnimation} 5s ease-in;
  animation: ${props => props.isClicked && coinAnimation} 5s ease-in;
  position: absolute;
  top: -75px;
  width: 100%;
  min-height: 100px;
`

export const Brilho = styled.div<IBlockButtonContainer>`
  -moz-animation: ${props => props.isClicked && coin2Animation} 5s ease-in;
  -webkit-animation: ${props => props.isClicked && coin2Animation} 5s ease-in;
  animation: ${props => props.isClicked && coin2Animation} 5s ease-in;
  -moz-background: url(${moeda3}) no-repeat center;
  -webkit-background: url(${moeda3}) no-repeat center;
  background: url(${moeda3}) no-repeat center;
  position: absolute;
  top: -90px;
  right: 0px;
  width: 100%;
  height: 60px;
  opacity: 0;
`
export const Numero = styled.div<IBlockButtonContainer>`
  -moz-animation: ${props => props.isClicked && coin3Animation} 5s ease-in;
  -webkit-animation: ${props => props.isClicked && coin3Animation} 5s ease-in;
  animation: ${props => props.isClicked && coin3Animation} 5s ease-in;
  -moz-background: url(${moeda4}) no-repeat center;
  -webkit-background: url(${moeda4}) no-repeat center;
  background: url(${moeda4}) no-repeat center;
  position: absolute;
  top: -90px;
  right: -15px;
  width: 100%;
  height: 60px;
  opacity: 0;
`

interface IIsMenu {
  isMenu: boolean
}

export const BaseButton = styled.div<IIsMenu>`
  -moz-animation: ${props => props.isMenu && interrogationAnimation} 0.5s linear;
  -webkit-animation: ${props => props.isMenu && interrogationAnimation} 0.5s
    linear;
  animation: ${props => props.isMenu && interrogationAnimation} 0.5s linear
    infinite;
  width: 50px;
  height: 50px;
`

export const Icon = styled.img`
  width: 50px;
`
