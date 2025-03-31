import React from "react";
import Hero from "./components/molecule/Hero";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import Title from "./components/molecule/Title";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import Header from "./components/molecule/Header";

type Props = {};

function App({}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <ReactLenis root>
        <Hero />
        <Title />
      </ReactLenis>
    </ThemeProvider>
  );
}

export default App;
