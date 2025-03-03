import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    headerButton: React.CSSProperties;
    mediumButton: React.CSSProperties;
    logo: React.CSSProperties;
    heroText: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    headerButton?: React.CSSProperties;
    mediumButton?: React.CSSProperties;
    logo?: React.CSSProperties;
    heroText?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headerButton: true;
    mediumButton: true;
    logo: true;
    heroText: true;
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
      lineHeight: "126.5%",
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: 32,
      fontWeight: 400,
      lineHeight: "126.5%",
      letterSpacing: "0%",
    },
    logo: {
      fontFamily: "Syne",
      fontSize: 32,
      fontWeight: 700,
    },
    heroText: {
      fontFamily: "Syne",
      fontSize: 125,
      fontWeight: 600,
    },
  },
  palette: {
    headerButton: {
      main: "#101010",
    },
  },
});

export default theme;
