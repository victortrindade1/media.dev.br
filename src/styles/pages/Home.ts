import styled from 'styled-components'

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

export const ScenarioCloud = styled.img`
  /* width: 80px; */
  /* position: absolute; */
  /* top: 30vh; */
  /* left: 30vw; */

  width: 30vw;
  max-width: 160px;
  margin-top: 20vh;
  margin-left: 20vw;
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
