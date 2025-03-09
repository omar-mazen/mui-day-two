import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
  typography: {
    allVariants: {
      color: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#000",
          color: "#fff",
          borderColor: "#000",
          "&:hover": {
            backgroundColor: "#111",
          },
        },
        outlined: {
          backgroundColor: "#fff",
          color: "#000",
          borderColor: "#fff",
          "&:hover": {
            backgroundColor: "#111",
          },
        },
        text: {
          backgroundColor: "#fff",
          color: "#000",
          "&:hover": {
            color: "#222",
          },
        },
      },
    },
  },
});

export default theme;
