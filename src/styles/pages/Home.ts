import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  background: #ace4e5;
  /* min-height: 100vh; */
  width: 100%;
  /* position: absolute;
  top: 0; */
  z-index: -1;
  position: relative;

  /* position: relative; */
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  align-items: center;
  height: 90vh;
`

const cloudAnimation = keyframes`
to {
    right: 100%;
    transform: translate(0);
  }
`

export const CloudContainer = styled.div`
  top: 15vh;
  right: -10vw;
  position: absolute;
  animation: ${cloudAnimation} 100s infinite linear;
`

export const CloudContainer2 = styled.div`
  top: 30vh;
  right: -13vw;
  position: absolute;
  animation: ${cloudAnimation} 500s infinite linear;
`

export const ScenarioCloud = styled.img`
  width: 30vw;
  max-width: 160px;
`

export const ScenarioCloud2 = styled.img`
  width: 15vw;
  max-width: 100px;
`

export const TextContainer = styled.div`
  background: #000;
  /* width: 300px; */
  padding: 20px;
  margin: auto;
  position: absolute;
  top: 40vh;
  /* left: 0;
  right: 0; */
  font-family: 'Press Start 2P', 'Roboto', sans-serif;
  color: #fff;
  font-size: small;
  line-height: 1.6;

  width: 80vw;
  max-width: 400px;
  /* position: absolute; */
  /* margin: auto; */
`

export const ScenarioPipe = styled.img`
  width: 100px;
  position: absolute;
  /* bottom: 80px; */
  /* left: 20px; */

  bottom: 0;
  left: 15vw;
`
