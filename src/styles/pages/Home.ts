import styled from 'styled-components'

interface ITest {
  background: any
}

export const DivTestNextImages = styled.div<ITest>`
  background: ${props => props.theme.palette.primary.dark}
    url('${props => props.background}') no-repeat center;
  background-size: cover;
`
