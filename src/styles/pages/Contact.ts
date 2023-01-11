import styled, { keyframes } from 'styled-components'
interface IContainer {
  background: any
}

export const Container = styled.div<IContainer>`
  background: #ffe3b4 url('${props => props.background}') repeat-x bottom;
  background-size: 70vw;
  width: 100%;
  z-index: -1;
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  padding-top: 20vh;
`

export const Mario = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40vw;
`

export const TextContainer = styled.div`
  background: #000;
  padding: 20px;
  margin: auto;
  position: absolute;
  top: 40vh;
  font-family: 'Press Start 2P', 'Roboto', sans-serif;
  color: #fff;
  font-size: small;
  line-height: 1.6;
  width: 80vw;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    padding-bottom: 30px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`

const iconAnimation = keyframes`
  0% { transform:translate(0,0) }
  1% { transform:translate(0,-10px) }
  2% { transform:translate(0,10px) }
  6% { transform:translate(0,0) }
  100% { transform:translate(0,0) }
`
// animação de pular embaixo do bloco
// sobe, desce, sobe mais alto, desce, porpurina sumindo e número 10 subindo

export const IconContainer = styled.div`
  :hover {
    cursor: pointer;
    animation: ${iconAnimation} 5s ease;
  }
`

export const Icon = styled.img`
  width: 60px;
`
