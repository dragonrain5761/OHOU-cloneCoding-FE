import { ThemeProvider } from "styled-components";
import Template from "./containers/layout/Template";
import GlobalStyle from "./lib/styles/GlobalStyle";
import Router from "./shared/Router";
import theme from "./lib/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Template header footer>
        <GlobalStyle />
        <Router />
      </Template>
    </ThemeProvider>
  );
}

export default App;
