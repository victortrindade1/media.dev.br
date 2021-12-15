import styled from 'styled-components'

interface IContainer {
  background: any
}
export const Container = styled.div<IContainer>`
  background: ${props => props.theme.palette.primary.dark}
    url('${props => props.background}') repeat-x center;
  /* height: 80px; */
  height: 10vh;
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0; */
`
