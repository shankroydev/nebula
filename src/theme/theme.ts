import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    headerButton: React.CSSProperties;
    mediumButton: React.CSSProperties;
    title: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    headerButton?: React.CSSProperties;
    mediumButton?: React.CSSProperties;
    title?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headerButton: true;
    mediumButton: true;
    title: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    headerButton: Palette["primary"];
  }

  interface PaletteOptions {
    headerButton?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  typography: {
    headerButton: {
      fontFamily: "Syne",
      fontSize: 24,
      fontWeight: 600,
    },
    mediumButton: {
      fontFamily: "Poppins",
      fontSize: 20,
      fontWeight: 400,
    },
  },
  palette: {
    headerButton: {
      main: "#101010",
    },
  },
});

export default theme;
