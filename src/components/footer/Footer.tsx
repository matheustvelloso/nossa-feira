import React from 'react';
import {
  FooterWrapper,
  FooterInner,
  FooterGrid,
  FooterBrand,
  FooterLogo,
  FooterTagline,
  FooterCol,
  FooterColTitle,
  FooterColText,
  FooterSocials,
  SocialBtn,
  FooterBottom,
} from './styles';

import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import logo from 'assets/LogoNossaFeiraFooter.svg';
import Reveal from 'components/reveal/Reveal';

const Footer: React.FC = () => {
  const reveal = useScrollReveal({ threshold: 0.1 });

  return (
    <FooterWrapper id="contato">
      <FooterInner>
        <Reveal reveal={reveal} direction="up">
          <FooterGrid>
            <FooterBrand>
              <FooterLogo>
                <img src={logo} alt="Nossa Feira" />
              </FooterLogo>
              <FooterTagline>
                O maior evento de variedades de Nova Friburgo. Cultura, lazer e
                negócios em um só lugar.
              </FooterTagline>
            </FooterBrand>

            <FooterCol>
              <FooterColTitle>LOCALIZAÇÃO</FooterColTitle>
              <FooterColText>
                Av. Julius Arp, 140
                <br />
                Nova Friburgo - RJ
              </FooterColText>
            </FooterCol>

            <FooterCol>
              <FooterColTitle>CONTATO</FooterColTitle>
              <FooterColText>contato@teiadeeventos.com.br</FooterColText>
              <FooterSocials>
                <SocialBtn
                  href="https://www.instagram.com/nossafeiranf/"
                  target="_blank"
                  rel="noopenner noreferrer"
                  aria-label="Compartilhar"
                  color="#E1306C"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </SocialBtn>
                <SocialBtn
                  href="https://www.facebook.com/nossafeiranf/"
                  target="_blank"
                  rel="noopenner noreferrer"
                  aria-label="Email"
                  color="#1877F2"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </SocialBtn>
                <SocialBtn
                  href="https://wa.me/5522988292912/"
                  target="_blank"
                  rel="noopenner noreferrer"
                  aria-label="Email"
                  color="#25D366"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </SocialBtn>
              </FooterSocials>
            </FooterCol>
          </FooterGrid>
        </Reveal>

        <FooterBottom>
          <p>© 2026 NOSSA FEIRA - TODOS OS DIREITOS RESERVADOS</p>
        </FooterBottom>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
