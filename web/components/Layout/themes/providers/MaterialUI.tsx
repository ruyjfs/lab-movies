import { ThemeProvider } from '@material-ui/core/styles';
import { themeMuiDark } from '../Dark';

export default function MaterialUIProvider({ themeName, children }) {
  return <ThemeProvider theme={themeMuiDark}>{children}</ThemeProvider>;
}
