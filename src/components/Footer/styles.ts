import styled from 'styled-components'

interface IContainer {
  background: any
}
export const Container = styled.div<IContainer>`
  background: ${props => props.theme.palette.primary.dark}
    url('${props => props.background}') repeat-x center;
  height: 10vh;
  position: fixed;
  bottom: 0px;
  width: 100%;
`
