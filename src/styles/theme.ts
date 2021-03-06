import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#d4af37',
      dark: '#333333',
      contrastText: '#f4f4f4'
    },
    secondary: {
      light: '#999',
      main: '#f44336',
      dark: '#222222',
      contrastText: '#000'
    },
    warning: {
      main: '#d4af37'
    },
    info: {
      main: '#222'
    }
  }
})

export default theme
