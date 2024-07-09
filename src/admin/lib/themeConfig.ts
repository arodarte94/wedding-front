import { createTheme } from '@mui/material/styles';

export const themeConfig = createTheme({
  palette: {
    primary: {
      main: '#546de5',
      light: '#7986cb',
      dark: '#303f9f',
    },
    secondary: {
      main: '#574b90',
      light: '#7c43bd',
      dark: '#311b92',
    },
    warning: {
      main: '#e67e22',
      light: '#ffab40',
      dark: '#ff9100',
    },
    error: {
      main: '#cf6a87',
      light: '#e57373',
      dark: '#d32f2f',
    },
    success: {
      main: '#16a085',
      light: '#48c9b0',
      dark: '#117a65',
    },
  },
  components: {
    // Name of the component ⚛️
    MuiAutocomplete: {},
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: 'outlined',
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        header: {
          backgroundColor: '#ffffff', // white background
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: '8px', // Change this value to adjust the thickness
        },
      },
    },
  },
});
