import React, { useState, useEffect, memo } from 'react';
import {
  NavWrapper,
  NavInner,
  NavLogo,
  NavLinks,
  NavLink,
  NavCta,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink,
} from './styles';

import logo from 'assets/LogoMinimalistaNossaFeira.svg';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavWrapper $scrolled={scrolled}>
        <NavInner>
          <NavLogo>
            <img src={logo} alt="Nossa Feira" />
          </NavLogo>

          <NavLinks>
            <NavLink href="#">Nossa História</NavLink>
            <NavLink href="#">Programação</NavLink>
            <NavLink href="#">Expositores</NavLink>
            <NavLink href="#lotes">Lotes</NavLink>
          </NavLinks>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <NavCta
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5522988293467/"
            >
              Quero Expor
            </NavCta>
            <MobileMenuButton
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '1.75rem' }}
              >
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </MobileMenuButton>
          </div>
        </NavInner>
      </NavWrapper>

      <MobileMenu $open={mobileOpen}>
        <MobileNavLink href="#" onClick={() => setMobileOpen(false)}>
          Nossa História
        </MobileNavLink>
        <MobileNavLink href="#" onClick={() => setMobileOpen(false)}>
          Programação
        </MobileNavLink>
        <MobileNavLink href="#" onClick={() => setMobileOpen(false)}>
          Expositores
        </MobileNavLink>
        <MobileNavLink href="#lotes" onClick={() => setMobileOpen(false)}>
          Lotes
        </MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default memo(Header);
