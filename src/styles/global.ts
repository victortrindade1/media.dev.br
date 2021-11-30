import { createGlobalStyle } from 'styled-components'
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
  }
`
