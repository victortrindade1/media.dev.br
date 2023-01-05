import { Drawer } from '@material-ui/core'
import styled, { keyframes } from 'styled-components'

const platformAnimation = keyframes`
  0% { transform:translate(0,0) }
  3% { transform:translate(0,30px) }
  7% { transform:translate(0,0) }
  9% { transform:translate(0,10px) }
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

export const MenuButtonContainer = styled.div<IMenu>`
  position: fixed;
  top: 24vh;
  right: 10vw;

  :hover {
    cursor: pointer;
  }
`

export const MenuButton = styled.img`
  width: 50px;
`

export const MenuContainer = styled.div``

export const StyledDrawer = styled(Drawer)`
  /* background-color: #ffffff; */

  .MuiBackdrop-root {
    background-color: #ffffff00;
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
