import styled from 'styled-components'
interface IContainer {
  background: any
}

export const Container = styled.div<IContainer>`
  background: #ffe3b4 url('${props => props.background}') repeat-x bottom;
  background-size: 70vw;
  width: 100%;
  z-index: 0;
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
  max-width: 290px;
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

  img {
    width: 60px;
  }
`

export const Label = styled.div`
  padding-top: 20px;
  font-size: 11px;
`
