import styled from 'styled-components';

export const NavWrapper = styled.nav<{ $scrolled?: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  background-color: ${({ theme, $scrolled }) =>
    $scrolled ? 'rgb(255, 122, 0, 0.92)' : theme.colors.primary};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(12px)' : 'none')};
  color: white;
  padding: 0px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, padding 0.3s ease;
  ${({ $scrolled }) => $scrolled && 'padding: 0.65rem 1.5rem;'}
`;

export const NavInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-style: italic;
  letter-spacing: -0.05em;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: none;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const NavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: white;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.darkText};
  }
`;

export const NavCta = styled.a`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenu = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileNavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: white;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
