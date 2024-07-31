import { createTheme } from "@mui/material/styles";

export const themeConfig = createTheme({
  palette: {
    primary: {
      main: "#546de5",
      light: "#7986cb",
      dark: "#303f9f",
    },
    secondary: {
      main: "#574b90",
      light: "#7c43bd",
      dark: "#311b92",
    },
    warning: {
      main: "#e67e22",
      light: "#ffab40",
      dark: "#bf6516",
    },
    error: {
      main: "#cf6a87",
      light: "#e57373",
      dark: "#d32f2f",
    },
    success: {
      main: "#16a085",
      light: "#48c9b0",
      dark: "#117a65",
    },
  },
  // typography: {
  //   fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  // },
  components: {
    // Name of the component ⚛️
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-colorWarning": {
            backgroundColor: "#e67e22",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#bf6516",
            },
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: "outlined",
        size: "medium",
        autoComplete: "off",
      },
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            fontSize: "0.95rem",
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        header: {
          backgroundColor: "#ffffff", // white background
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: "8px", // Change this value to adjust the thickness
        },
      },
    },
  },
});
