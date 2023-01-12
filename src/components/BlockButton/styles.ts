import styled, { keyframes } from 'styled-components'
import React from 'react'

import moeda1 from '../../assets/svg/moeda1.svg'
import moeda2 from '../../assets/svg/moeda2.svg'
import moeda3 from '../../assets/svg/moeda3.svg'
import moeda4 from '../../assets/svg/moeda4.svg'

interface IBlockButtonContainer {
  isClicked: boolean
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const iconAnimation = keyframes`
  0% { transform:translate(0,0) }
  1% { transform:translate(0,-10px) }
  2% { transform:translate(0,10px) }
  6% { transform:translate(0,0) }
  100% { transform:translate(0,0) }
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
    background: url(${moeda2}) no-repeat center;
    opacity: 1
   }
  2% {
    top: -90px
  }
  2.01% {
    background: url(${moeda1}) no-repeat center;
    top: -90px
  }
  4% {
    top: -100px;
  }
  4.01% {
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

export const Container = styled.div<IBlockButtonContainer>`
  position: relative;
  animation: ${props => props.isClicked && iconAnimation} 5s ease;

  > div {
    animation: ${props => props.isClicked && coinAnimation} 5s ease-in;
    position: absolute;
    top: -75px;
    width: 100%;
    min-height: 100px;
  }

  > div + div {
    animation: ${props => props.isClicked && coin2Animation} 5s ease-in;
    background: url(${moeda3}) no-repeat center;
    position: absolute;
    top: -90px;
    right: 0px;
    width: 100%;
    height: 60px;
    opacity: 0;
  }

  > div + div + div {
    animation: ${props => props.isClicked && coin3Animation} 5s ease-in;
    background: url(${moeda4}) no-repeat center;
    position: absolute;
    top: -90px;
    right: -15px;
    width: 100%;
    height: 60px;
    opacity: 0;
  }

  :hover {
    cursor: pointer;
  }
`

export const Icon = styled.img`
  width: 50px;
`
