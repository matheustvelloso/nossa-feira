import Header from 'components/header/Header';
import React, { memo } from 'react';
import {
  AboutButtons,
  AboutDescription,
  AboutInner,
  AboutSection,
  AboutText,
  AboutTitle,
  AttractionCard,
  AttractionDescription,
  AttractionIcon,
  AttractionsBackground,
  AttractionsGrid,
  AttractionsInner,
  AttractionsSection,
  AttractionsTitle,
  AttractionTitle,
  BtnAboutPrimary,
  BtnAboutSecondary,
  CtaBtnPrimary,
  CtaBtnSecondary,
  CtaButtons,
  CtaCard,
  CtaCornerDecor,
  CtaInner,
  CtaSection,
  CtaTagline,
  CtaTitle,
  FloatingImageLeft,
  FloatingImageRight,
  FoodBadge,
  FoodContent,
  FoodDescription,
  FoodIcon,
  FoodImageFrame,
  FoodImageWrapper,
  FoodInner,
  FoodItem,
  FoodLayout,
  FoodList,
  FoodSection,
  FoodTitle,
  HeroBadge,
  HeroSection,
  HeroTitle,
  LotesImage,
  LotesImageWrapper,
  LotesOverlay,
  LotesOverlayText,
  LotesSection,
  LotesTitle,
  MarqueeContent,
  MarqueeTrack,
  MarqueeWrapper,
} from './styles';

import nossaFeira from 'assets/LogoNossaFeira.svg';
import imgRight from 'assets/heroImageRight.webp';
import imgLeft from 'assets/heroImageLeft.webp';
import imgFood from 'assets/NossaFeira-Setembro2025-TeiadeEventos-145.webp';
import lotes from 'assets/nossaFeiraLotes.webp';

import { useScrollReveal } from 'hooks/useScrollReveal';

import PhotoGallery from 'components/photoGallery/PhotoGallery';

import { photoColumns } from 'datas/photoData';
import { attractions } from 'datas/attractionsData';
import { foodItems } from 'datas/foodData';
import { marqueeItems } from 'datas/marqueeData';
import Footer from 'components/footer/Footer';
import Reveal from 'components/reveal/Reveal';

const Home: React.FC = () => {
  const revealDefault = { threshold: 0.1 };

  const AboutTextReveal = useScrollReveal(revealDefault);
  const AboutPhotoReveal = useScrollReveal(revealDefault);

  const attractionsTitleReveal = useScrollReveal(revealDefault);

  const card0 = useScrollReveal(revealDefault);
  const card1 = useScrollReveal(revealDefault);
  const card2 = useScrollReveal(revealDefault);

  const cardRefs = [card0, card1, card2];

  const foodImgReveal = useScrollReveal(revealDefault);
  const foodTextReveal = useScrollReveal(revealDefault);

  const ctaReveal = useScrollReveal({ threshold: 0.15 });

  return (
    <>
      <Header />

      <HeroSection>
        <HeroTitle>
          <img src={nossaFeira} alt="Nossa Feira" />
        </HeroTitle>
        {/* <HeroBadge>30/07 A 02/08</HeroBadge> */}

        <FloatingImageLeft>
          <img src={imgLeft} alt="Evento - cultura e moda" />
        </FloatingImageLeft>

        <FloatingImageRight>
          <img src={imgRight} alt="Gastronomia do evento" />
        </FloatingImageRight>
      </HeroSection>

      <MarqueeWrapper>
        <MarqueeTrack>
          <MarqueeContent>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </MarqueeContent>
          <MarqueeContent aria-hidden>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </MarqueeContent>
        </MarqueeTrack>
      </MarqueeWrapper>

      <AboutSection>
        <AboutInner>
          <Reveal reveal={AboutTextReveal} direction="left">
            <AboutText>
              <AboutTitle>
                QUEM
                <br />
                SOMOS
              </AboutTitle>
              <AboutDescription>
                A <strong>NOSSA FEIRA</strong> é onde a criatividade e o
                empreendedorismo se encontram em Nova Friburgo. Um evento
                multissetorial com moda, gastronomia, lazer e muitas
                experiências para aproveitar, descobrir coisas novas e passar
                bons momentos com a família.
              </AboutDescription>
              <AboutButtons>
                <BtnAboutPrimary
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/5522988293467/"
                >
                  QUERO EXPOR
                </BtnAboutPrimary>
                <BtnAboutSecondary href="https://maps.app.goo.gl/bq6hqELBuCfgTeT99">
                  COMO CHEGAR
                </BtnAboutSecondary>
              </AboutButtons>
            </AboutText>
          </Reveal>

          <Reveal reveal={AboutPhotoReveal} direction="right" delay={0.1}>
            <PhotoGallery columns={photoColumns} />
          </Reveal>
        </AboutInner>
      </AboutSection>

      <AttractionsSection>
        <AttractionsBackground>SHOWS</AttractionsBackground>

        <AttractionsInner>
          <Reveal reveal={attractionsTitleReveal} direction="up">
            <AttractionsTitle>ATRAÇÕES</AttractionsTitle>
          </Reveal>

          <AttractionsGrid>
            {attractions.map((item, i) => (
              <Reveal
                key={item.title}
                reveal={cardRefs[i]}
                direction="up"
                delay={i * 0.12}
              >
                <AttractionCard>
                  <AttractionIcon className="material-symbols-outlined">
                    {item.icon}
                  </AttractionIcon>
                  <AttractionTitle>{item.title}</AttractionTitle>
                  <AttractionDescription>
                    {item.description}
                  </AttractionDescription>
                </AttractionCard>
              </Reveal>
            ))}
          </AttractionsGrid>
        </AttractionsInner>
      </AttractionsSection>

      <FoodSection>
        <FoodInner>
          <FoodLayout>
            <Reveal reveal={foodImgReveal} direction="left">
              <FoodImageWrapper>
                <FoodImageFrame>
                  <img src={imgFood} alt="Praça de Alimentação" />
                </FoodImageFrame>
                <FoodBadge>EXPLOSÃO DE SABORES!</FoodBadge>
              </FoodImageWrapper>
            </Reveal>

            <Reveal reveal={foodTextReveal} direction="right" delay={0.1}>
              <FoodContent>
                <FoodTitle>
                  PRAÇA DE
                  <br />
                  ALIMENTAÇÃO
                </FoodTitle>
                <FoodDescription>
                  Uma experiência gastronômica completa com diversas variedades.
                  Do lanche rápido ao prato gourmet, temos opções para todos os
                  paladares.
                </FoodDescription>
                <FoodList>
                  {foodItems.map((item, i) => (
                    <FoodItem
                      key={item.label}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <FoodIcon>
                        <span className="material-symbols-outlined">
                          {item.icon}
                        </span>
                      </FoodIcon>
                      {item.label}
                    </FoodItem>
                  ))}
                </FoodList>
              </FoodContent>
            </Reveal>
          </FoodLayout>
        </FoodInner>
      </FoodSection>

      <LotesSection id="lotes">
        <LotesTitle>Lotes</LotesTitle>
        <LotesImageWrapper>
          <LotesImage src={lotes} alt="Lotes disponíveis" />
          <LotesOverlay>
            <LotesOverlayText>EM BREVE</LotesOverlayText>
          </LotesOverlay>
        </LotesImageWrapper>
      </LotesSection>

      <CtaSection>
        <CtaInner>
          <Reveal reveal={ctaReveal} direction="zoom">
            <CtaCard>
              <CtaCornerDecor />
              <CtaTitle>VAI FICAR DE FORA DESSA?</CtaTitle>
              <CtaButtons>
                <CtaBtnPrimary
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/5522988293467/"
                >
                  QUERO EXPOR
                </CtaBtnPrimary>
                <CtaBtnSecondary
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maps.app.goo.gl/Vd4SPBhdXLsn39XG6"
                >
                  TEIA DE EVENTOS
                </CtaBtnSecondary>
              </CtaButtons>
              <CtaTagline>Seja um expositor!</CtaTagline>
            </CtaCard>
          </Reveal>
        </CtaInner>
      </CtaSection>

      <Footer />
    </>
  );
};

export default memo(Home);
