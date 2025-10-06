import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b5cf6',
      light: '#a78bfa',
      dark: '#7c3aed',
    },
    secondary: {
      main: '#ec4899',
      light: '#f472b6',
      dark: '#db2777',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#a0a0a0',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h: {
      fontSize: '3rem',
      fontWeight: 700,
      background: '#ffffff',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 40,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontSize: '1rem',
          padding: '10px 30px',
          fontWeight: 600,
        },
        contained: {
          background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)',
          },
        },
        outlined: {
          borderColor: '#8b5cf6',
          color: '#e0e0e0',
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(139, 92, 246, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '15px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            borderColor: 'rgba(139, 92, 246, 0.5)',
            boxShadow: '0 10px 40px rgba(139, 92, 246, 0.2)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'rgba(139, 92, 246, 0.2)',
          color: '#e0e0e0',
          borderRadius: '20px',
        },
      },
    },
  },
});

export default theme;