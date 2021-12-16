import styled from 'styled-components'

interface IContainer {
  isLight: boolean
}

export const Container = styled.div<IContainer>`
  color: ${props => (props.isLight ? '#fff' : '#000')};
  font-family: 'Press Start 2P', 'Roboto', sans-serif;
  /* padding-bottom: 80px; */
  margin-bottom: 10vh;
`
