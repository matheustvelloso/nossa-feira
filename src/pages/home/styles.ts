import styled from 'styled-components';

import heroImg from 'assets/heroBanner.webp';

/* Hero Section */

export const HeroSection = styled.section`
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  overflow: hidden;
`;

export const HeroBadge = styled.div`
  position: relative;
  z-index: 10;
  margin-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.darkText};
  padding: 0.75rem 2rem;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  transform: rotate(-2deg);
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.25rem, 3vw, 2.25rem);
  font-style: italic;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.6s ease both;
`;

export const HeroTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const FloatingImageLeft = styled.div`
  position: absolute;
  left: 2.5rem;
  width: 16rem;
  height: 16rem;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 4px solid white;
  display: none;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation:
    rotateIn 0.9s ease 0.4s both,
    floatY 5s ease-in-out 1.3s infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

export const FloatingImageRight = styled.div`
  position: absolute;
  right: 2.5rem;
  width: 18rem;
  height: 18rem;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 4px solid white;
  display: none;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation:
    rotateInRight 0.9s ease 0.5s both,
    floatYRight 6s ease-in-out 1.4s infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

/* ======== - ======== */

/* Marquee Section */

export const MarqueeWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.1rem 0;
  border-top: 4px solid ${({ theme }) => theme.colors.darkText};
  border-bottom: 4px solid ${({ theme }) => theme.colors.darkText};
  overflow: hidden;
`;

export const MarqueeTrack = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 2rem;
`;

export const MarqueeContent = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  min-width: 100%;
  animation: scroll 30s linear infinite;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.25rem, 3vw, 1.875rem);
  font-style: italic;
  color: white;

  span {
    white-space: nowrap;
  }
`;

/* ======== - ======== */

/* About Section */

export const AboutSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const AboutInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  gap: 4rem;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AboutText = styled.div``;

export const AboutTitle = styled.h2`
  font-size: clamp(3rem, 8vw, 5rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  line-height: 1;
`;

export const AboutDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.375rem);
  color: #475569;
  line-height: 1.7;
  margin-bottom: 2rem;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`;

export const AboutButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const BtnAboutPrimary = styled.a`
  background-color: ${({ theme }) => theme.colors.darkText};
  color: white;
  padding: 1rem 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.125rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.03);
  }
`;

export const BtnAboutSecondary = styled.a`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.darkText};
  padding: 1rem 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.125rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    transform: scale(1.03);
    padding: 0.94rem 2.44rem;
  }
`;

/* ======== - ======== */

/* Attractions Section */

export const AttractionsSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  overflow: hidden;
  position: relative;
`;

export const AttractionsBackground = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 20rem;
  color: rgba(255, 255, 255, 0.04);
  line-height: 1;
  user-select: none;
  pointer-events: none;
  font-style: italic;
  letter-spacing: -0.05em;
`;

export const AttractionsInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const AttractionsTitle = styled.h2`
  font-size: clamp(3rem, 10vw, 6rem);
  margin-bottom: 4rem;
  text-align: center;
  font-style: italic;
`;

export const AttractionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: stretch;
  justify-content: center;
`;

export const AttractionCard = styled.div`
  flex: 1;
  max-width: 400px;
  height: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  backdrop-filter: blur(12px);
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.card};
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition:
    background 0.3s ease,
    transform 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-4px);
  }

  &:hover h3 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AttractionIcon = styled.span`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  display: block;
`;

export const AttractionTitle = styled.h3`
  font-size: 1.875rem;
  margin-bottom: 1rem;
  transition: color 0.2s ease;
  color: black;
`;

export const AttractionDescription = styled.p`
  font-size: 1.0625rem;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.6;
`;

/* ======== - ======== */

/* Food Section */

export const FoodSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const FoodInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const FoodLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const FoodImageWrapper = styled.div`
  width: 100%;
  position: relative;
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 48%;
  }
`;

export const FoodImageFrame = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.card};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transform: rotate(-3deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(-1deg);
  }

  img {
    border-radius: 1.875rem;
    width: 100%;
    height: 500px;
    object-fit: cover;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 300px;
    }
  }
`;

export const FoodBadge = styled.div`
  position: absolute;
  bottom: -2.5rem;
  right: -2.5rem;
  background-color: ${({ theme }) => theme.colors.accent};
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1rem;
  text-align: center;
  padding: 1rem;
  transform: rotate(12deg);
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border: 4px solid white;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 8rem;
    height: 8rem;
    font-size: 0.75rem;
    bottom: -1.5rem;
    right: -1rem;
  }
`;

export const FoodContent = styled.div`
  flex: 1;
`;

export const FoodTitle = styled.h2`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  line-height: 1;
`;

export const FoodDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.375rem);
  color: #475569;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

export const FoodList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FoodItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
`;

export const FoodIcon = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  .material-symbols-outlined {
    font-size: 1.5rem;
  }
`;

/* ======== - ======== */

/* CTA Section */

export const CtaSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const CtaInner = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

export const CtaCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 3rem;
  padding: 4rem 2rem;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
  border-bottom: 8px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 5rem;
  }
`;

export const CtaCornerDecor = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  transform: rotate(15deg) translate(2rem, -2rem);
`;

export const CtaTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3.75rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
  font-style: italic;
  position: relative;
  z-index: 1;
`;

export const CtaButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  position: relative;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const CtaBtnPrimary = styled.a`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.darkText};
  padding: 1.25rem 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: transform 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.darkText};
    transform: scale(1.05);
    padding: 1.18rem 2.94rem;
  }
`;

export const CtaBtnSecondary = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1.25rem 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CtaTagline = styled.p`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: italic;
  position: relative;
  z-index: 1;
`;

/* ======== - ======== */

/* Lotes Section */

export const LotesSection = styled.section`
  padding: 6rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const LotesImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
`;

export const LotesTitle = styled.h2`
  font-size: clamp(3rem, 8vw, 5rem);
  color: ${({ theme }) => theme.colors.secondary};
`;

export const LotesImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 20px 50px rgb(255, 255, 255, 0.35);
`;

export const LotesOverlay = styled.div`
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LotesOverlayText = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-style: italic;
  color: white;
  letter-spacing: -0.05em;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
`;

/* ======== - ======== */
