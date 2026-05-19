"use client";

import { createTheme } from "@mui/material/styles";
import { Geist, Space_Grotesk } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#1B2A41",
      light: "#324A6B",
      dark: "#0E1828",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#C8923D",
      light: "#E0B36A",
      dark: "#8E6420",
      contrastText: "#ffffff",
    },
    background: {
      default: "#FAF8F4",
      paper: "#ffffff",
    },
    text: {
      primary: "#1B2A41",
      secondary: "#52617A",
    },
    divider: "rgba(27, 42, 65, 0.12)",
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: geist.style.fontFamily,
    h1: {
      fontFamily: spaceGrotesk.style.fontFamily,
      fontWeight: 800,
      fontSize: "clamp(2.5rem, 6vw, 4.75rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: spaceGrotesk.style.fontFamily,
      fontWeight: 700,
      fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
      lineHeight: 1.1,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontFamily: spaceGrotesk.style.fontFamily,
      fontWeight: 700,
      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: spaceGrotesk.style.fontFamily,
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.125rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.65,
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.02em",
      textTransform: "none",
    },
    overline: {
      fontWeight: 700,
      letterSpacing: "0.18em",
      fontSize: "0.78rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        "::selection": {
          background: "#C8923D",
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 24,
          paddingBlock: 12,
          fontSize: "0.95rem",
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: {
                background: "linear-gradient(135deg, #1B2A41 0%, #324A6B 100%)",
                "&:hover": {
                  background: "linear-gradient(135deg, #0E1828 0%, #1B2A41 100%)",
                },
              },
            },
            {
              props: { variant: "contained", color: "secondary" },
              style: {
                background: "linear-gradient(135deg, #C8923D 0%, #E0B36A 100%)",
                color: "#1B2A41",
                "&:hover": {
                  background: "linear-gradient(135deg, #B07F2F 0%, #C8923D 100%)",
                  color: "#1B2A41",
                },
              },
            },
          ],
        },
        sizeLarge: {
          paddingInline: 32,
          paddingBlock: 14,
          fontSize: "1rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: "0 4px 24px rgba(14, 24, 40, 0.06)",
          border: "1px solid rgba(27, 42, 65, 0.06)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid rgba(27, 42, 65, 0.08)",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});

export default theme;
