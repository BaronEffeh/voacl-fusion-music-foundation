// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#FFF7F9', // Set global background color
    },
    primary: {
      main: '#6200ea', // Example color (purple)
    },
    secondary: {
      main: '#ff5252', // Accent color (red)
    },
  },
  typography: {
    fontFamily: `'Lato', 'Poppins', 'Roboto', 'Arial', sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h4: { fontWeight: 900 },
    body1: { fontSize: '1rem', lineHeight: "30px" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          backgroundColor: '#FFF7F9',
        },
        '*': {
          boxSizing: 'inherit',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  },
});

export default theme;
