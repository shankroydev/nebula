import { ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react";
import theme from "../src/theme/theme";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
