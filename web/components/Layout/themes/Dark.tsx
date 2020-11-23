import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const themeMuiDark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00000090',
    },
    secondary: {
      main: orange[500],
    },
  },
});

const themeDark = {
  colors: {
    primary: '#0070f3',
  },
};

export { themeMuiDark, themeDark };
