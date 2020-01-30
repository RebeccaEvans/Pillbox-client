import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#428e92', 
      main: '#006064',
      dark: '#00363a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffff72', 
      main: '#ffeb3b',
      dark: 'c8b900',
      contrastText: '#000000',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;



