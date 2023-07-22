import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Template from "./containers/layout/Template";
import GlobalStyle from "./lib/styles/GlobalStyle";
import Router from "./shared/Router";
import theme from "./lib/styles/theme";
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Template header footer>
          <GlobalStyle />
          <Router />
        </Template>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
