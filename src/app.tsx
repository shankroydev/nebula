import React from "react";
import Hero from "./components/molecule/Hero";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";

type Props = {};

function App({}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>
  );
}

export default App;
