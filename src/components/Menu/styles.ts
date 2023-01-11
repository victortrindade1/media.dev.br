import { Drawer } from '@material-ui/core'
import styled, { keyframes } from 'styled-components'

import moeda1 from '../../assets/svg/moeda1.svg'
import moeda2 from '../../assets/svg/moeda2.svg'
import moeda3 from '../../assets/svg/moeda3.svg'
import moeda4 from '../../assets/svg/moeda4.svg'

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
    top: -120px;
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

const platformAnimation = keyframes`
  0% { transform:translate(0,0) }
  3% { transform:translate(0,30px) }
  7% { transform:translate(0,0) }
  9% { transform:translate(0,10px) }
  15% { transform:translate(0,0) }
  100% { transform:translate(0,0) }
`

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

export const Container = styled.div`
  display: flex;
  flex-flow: column;
`

export const Shake = styled.div`
  animation: ${shakeAnimation} 4.72s ease infinite;
  transform-origin: 50% 50%;
`

interface IMenu {
  readonly isMenuOpened: boolean
}

// export const CoinAnimated = styled.div``

export const MenuButtonContainer = styled.div<IMenu>`
  position: fixed;
  top: 24vh;
  right: 10vw;

  /* > div + div {
    background-color: #123456;
    height: 50px;
  } */

  > div + div {
    background: url(${moeda3}) no-repeat;
    position: absolute;
    top: -70px;
    right: -15px;
    width: 100%;
    height: 60px;
    opacity: 0;
    /* background-color: #12345650; */
  }

  > div + div + div {
    background: url(${moeda4}) no-repeat;
    position: absolute;
    top: -70px;
    right: -30px;
    width: 100%;
    height: 60px;
    opacity: 0;
  }

  :hover {
    cursor: pointer;
  }
  > div {
    animation: ${props => props.isMenuOpened && coinAnimation} 5s ease-in;
    position: absolute;
    top: -75px;
    width: 100%;
    min-height: 100px;
  }
  > div + div {
    animation: ${props => props.isMenuOpened && coin2Animation} 5s ease-in;
  }
  > div + div + div {
    animation: ${props => props.isMenuOpened && coin3Animation} 5s ease-in;
  }
`

export const MenuButton = styled.img`
  width: 50px;
`

export const MenuContainer = styled.div``

export const StyledDrawer = styled(Drawer)`
  .MuiBackdrop-root {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2.2px);
  }

  .MuiDrawer-paper {
    background-color: #ffffff00;
    box-shadow: none;
  }
`

interface IContainer {
  background: any
}

export const MenuBackgroundBottom = styled.div<IContainer>`
  background: url('${props => props.background}') repeat center;
  height: 18vh;

  > nav {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-around;

    position: fixed;
    bottom: 15vh;
    width: 100%;
    z-index: -1;
  }
`

export const MenuBackgroundTop = styled.div<IContainer>`
  background: url('${props => props.background}') repeat-x center;
  height: 4vh;
`

export const MenuItemContainer = styled.div<IContainer>`
  background: url('${props => props.background}') no-repeat center;
  width: 30vw;
  height: 10vw;

  position: relative;
  display: flex;
  justify-content: center;

  > img {
    position: absolute;
    top: -9.5vw;
    width: 10vw;
  }

  > a {
    opacity: 0;
    color: #fff;
    font-family: 'Press Start 2P', 'Roboto', sans-serif;
    position: absolute;
    top: -18vw;
    padding: 3vw;
    background: #000;
    transition: opacity 0.5s ease;

    z-index: 9;
  }

  :hover {
    animation: ${platformAnimation} 5s ease;
    transform-origin: 50% 50%;
    cursor: pointer;
    > a {
      opacity: 1;
    }
  }
`

export const ItemIcon = styled.img`
  /* width: 80px; */
  width: 10vw;
`
