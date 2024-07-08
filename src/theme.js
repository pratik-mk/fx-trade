import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#1C1C1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#888888",
    },
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#888888",
    },
    error: {
      main: "#FF0000",
    },
    success: {
      main: "#00FF00",
    },
  },
  typography: {
    fontFamily: "Clash Display, Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Clash Display, Arial, sans-serif",
        },
      },
    },
  },
});
