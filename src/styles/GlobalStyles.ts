import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Inter:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.bgOff};
    color: #1e293b;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.05em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
  }

  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0) translateX(-50%); }
    50% { transform: translateY(-12px) translateX(-50%); }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes rotateIn {
    from {
      opacity: 0;
      transform: rotate(-12deg) scale(0.85);
    }
    to {
      opacity: 1;
      transform: rotate(-12deg) scale(1);
    }
  }

  @keyframes rotateInRight {
    from {
      opacity: 0;
      transform: rotate(8deg) scale(0.85);
    }
    to {
      opacity: 1;
      transform: rotate(8deg) scale(1);
    }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.04); }
  }

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes floatY {
    0%, 100% { transform: translateY(0px) rotate(-12deg); }
    50% { transform: translateY(-14px) rotate(-12deg); }
  }

  @keyframes floatYRight {
    0%, 100% { transform: translateY(0px) rotate(8deg); }
    50% { transform: translateY(-18px) rotate(8deg); }
  }
`;
