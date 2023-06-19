import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111821",
    },
    secondary: {
      main: "#522546",
    },
    success: {
      main: "#4BB543",
    },
    error: {
      main: "#d13d48",
    },
    white: {
      main: "#fff",
    },
    info: {
      main: "#6EC6FF",
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default theme;
