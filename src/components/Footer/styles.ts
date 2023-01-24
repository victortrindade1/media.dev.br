import styled from 'styled-components'

interface IContainer {
  background: any
}
export const Container = styled.div<IContainer>`
  -moz-background: ${props => props.theme.palette.primary.dark}
    url('${props => props.background}');
  -webkit-background: ${props => props.theme.palette.primary.dark}
    url('${props => props.background}');
  background: ${props => props.theme.palette.primary.dark}
    url('${props => props.background}');

  background-size: 100% 70px;
  background-repeat: no-repeat;

  height: 70px;
  position: fixed;
  bottom: 0px;
  width: 100%;

  -moz-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
`
