import { Drawer } from '@material-ui/core'
import styled, { keyframes } from 'styled-components'

const platformAnimation = keyframes`
  0% {
    -moz-transform:translate(0,0);
    -webkit-transform:translate(0,0);
    transform:translate(0,0);
  }
  3% {
    -moz-transform:translate(0,30px);
    -webkit-transform:translate(0,30px);
    transform:translate(0,30px);
  }
  7% {
    -moz-transform:translate(0,0);
    -webkit-transform:translate(0,0);
    transform:translate(0,0);
  }
  9% {
    -moz-transform:translate(0,10px);
    -webkit-transform:translate(0,10px);
    transform:translate(0,10px);
  }
  15% {
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

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  z-index: 1;
`

export const Shake = styled.div`
  -moz-animation: ${shakeAnimation} 4.72s ease infinite;
  -webkit-animation: ${shakeAnimation} 4.72s ease infinite;
  animation: ${shakeAnimation} 4.72s ease infinite;
  -moz-transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  /* transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d; */
`

export const ButtonContainer = styled.div`
  position: fixed;
  top: 24vh;
  right: 10vw;
`

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
  isBreakpoint?: boolean
}

export const MenuBackgroundBottom = styled.div<IContainer>`
  -moz-background: url('${props => props.background}') repeat center;
  -webkit-background: url('${props => props.background}') repeat center;
  background: url('${props => props.background}') repeat center;
  height: ${props => (props.isBreakpoint ? '15vh' : '19vh')};

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
  -moz-background: url('${props => props.background}') repeat-x center;
  -webkit-background: url('${props => props.background}') repeat-x center;
  background: url('${props => props.background}') repeat-x center;
  height: 4vh;
`

export const MenuItemContainer = styled.div<IContainer>`
  -moz-background: url('${props => props.background}') no-repeat center;
  -webkit-background: url('${props => props.background}') no-repeat center;
  background: url('${props => props.background}') no-repeat center;
  -moz-background: url('${props => props.background}') no-repeat center;
  -webkit-background: url('${props => props.background}') no-repeat center;
  background: url('${props => props.background}') no-repeat center;
  -moz-background: url('${props => props.background}') no-repeat center;
  -webkit-background: url('${props => props.background}') no-repeat center;
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
    -moz-transition: opacity 0.5s ease;
    -webkit-transition: opacity 0.5s ease;
    transition: opacity 0.5s ease;

    z-index: 9;
  }

  :hover {
    -moz-animation: ${platformAnimation} 5s ease;
    -webkit-animation: ${platformAnimation} 5s ease;
    animation: ${platformAnimation} 5s ease;
    -moz-transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
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
