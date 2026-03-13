export const theme = {
  colors: {
    primary: '#2C4A2E',
    secondary: '#F5F0E8',
    accent: '#C8D8C8',
    bgOff: '#FFFFFC',
    white: '#FFFFFF',
    darkText: '#1e293b',
    mutedText: '#64748b',
  },
  fonts: {
    display: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  borderRadius: {
    pill: '9999px',
    card: '40px',
    xl: '24px',
    lg: '16px',
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 25px rgba(0,0,0,0.15)',
    xl: '0 20px 50px rgba(0,0,0,0.2)',
  },
};

export type Theme = typeof theme;
