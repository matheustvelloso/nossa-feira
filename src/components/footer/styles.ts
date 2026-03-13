import styled from 'styled-components';

interface SocialBtnProps {
  color?: string;
}

export const FooterWrapper = styled.footer`
  background-color: #121214;
  padding-top: 5rem;
  padding-bottom: 2.5rem;
`;

export const FooterInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  color: white;
  margin-bottom: 5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

export const FooterBrand = styled.div``;

export const FooterLogo = styled.div`
  margin-bottom: 1.5rem;
`;

export const FooterTagline = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.0625rem;
  max-width: 28rem;
  line-height: 1.6;
`;

export const FooterCol = styled.div``;

export const FooterColTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-style: italic;
`;

export const FooterColText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  font-size: 1rem;
`;

export const FooterSocials = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const SocialBtn = styled.a<SocialBtnProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.8);
  display: flex;       
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  cursor: pointer;
  font-size: 18px;


  &:hover {
    background-color: ${({color}) => color };
    border-color: ${({color}) => color };
  }
`;

export const FooterBottom = styled.div`
  padding-top: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;
