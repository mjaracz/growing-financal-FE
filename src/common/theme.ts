import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'hsl(193, 95%, 68%)',
      dark: 'hsl(220, 13%, 18%)'
    },
    secondary: {
      main: 'hsl(281, 100%, 80%)'
    },
    background: {
      default: 'hsl(220, 13%, 18%)'
    },
    text: {
      secondary: 'hsl(0, 0%, 100%)',
      hint: 'rgb(215, 146, 247)'
    }  
  }
})