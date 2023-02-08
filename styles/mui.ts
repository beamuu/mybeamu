import { createTheme } from "@mui/material";

const themeWithNoComponents = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#35bda4",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00000010",
      contrastText: "#156ced",
    },
    info: {
      main: "#1b78f2",
    },
    text: {
      primary: "#262626",
      secondary: "#4a4a4a",
      disabled: "#6a6a6a",
    },
    background: {
      default: "#ffffff",
    },
    divider: "#d7dbde",
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
    h1: {
      fontWeight: 600,
      fontFamily: `'Inter Tight', sans-serif`,
    },
    h2: {
      fontWeight: 600,
      fontFamily: `'Inter Tight', sans-serif`,
    },
    h3: {
      fontWeight: 600,
      fontFamily: `'Inter Tight', sans-serif`,
    },
    h4: {
      fontWeight: 600,
      fontFamily: `'Inter Tight', sans-serif`,
    },
    h5: {
      fontWeight: 600,
      fontFamily: `'Inter Tight', sans-serif`,
    },
    h6: {
      fontWeight: 600,
      fontSize: 16,
      fontFamily: `'Inter', sans-serif`,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      opacity: 0.6,
    },
    button: {
      fontSize: 16,
      fontWeight: 500,
      textTransform: "none",
    },
  },
});

export const theme = createTheme(themeWithNoComponents, {
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiLink: {
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {},
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderStyle: "solid",
          borderColor: themeWithNoComponents.palette.divider,
          borderWidth: "1px",
          overflow: "hidden",
          padding: 8,
          borderRadius: {
            xs: 0,
            sm: "8px",
          },
        },
      },
    },
  },
});
