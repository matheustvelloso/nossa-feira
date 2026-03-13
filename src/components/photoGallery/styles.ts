import styled from 'styled-components';

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const PhotoCol = styled.div<{ $offset?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: ${({ $offset }) => ($offset ? '3rem' : '0')};
`;

export const PhotoCard = styled.img<{
  $rotate: string;
  $height: string;
  $blur?: boolean;
}>`
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  width: 100%;
  height: ${({ $height }) => $height};
  object-fit: cover;
  transform: ${({ $rotate }) => $rotate};
  transition: transform 0.3s ease box-shadow 0.3s ease;
  filter: blur(${({ $blur }) => ($blur ? '0.9px' : '0px')});

  &:hover {
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  }
`;
