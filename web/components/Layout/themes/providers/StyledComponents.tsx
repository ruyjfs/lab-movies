import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { themeDark } from '../Dark';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: radial-gradient(circle at top,#252525, #000) no-repeat;
    background-color: #000000;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    min-height: 100vh;
  }
  main {

    height: calc(100vh - 140px);
  }
`;

export default function AppLayoutThemesProvider({ themeName, children }) {
  return (
    <ThemeProvider theme={themeDark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
