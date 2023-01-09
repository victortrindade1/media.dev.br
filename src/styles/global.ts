import { createGlobalStyle, css } from 'styled-components'
import { Theme } from './styled'

export default createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.palette.primary.dark};
    color: ${props => props.theme.palette.primary.main};
    font: 400 16px Roboto, sans-serif;
    // coloquei pra nao aparecer scrollbar na animação da nuvem
    // Se precisar dessa scrollbar horizontal, preciso mexer na nuvem do index
    overflow-x: hidden;
  }
`

export const nextNProgressStyled = css`
  .nprogress-bar {
    box-shadow: none;
  }
`
