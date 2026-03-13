import React, { memo, ReactElement } from 'react';
import { Direction, RevealContainer } from './styles';

interface RevealProps {
  reveal: {
    ref: React.RefObject<HTMLElement>;
    isVisible: boolean;
  };
  direction: Direction;
  children: ReactElement;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({
  reveal,
  direction,
  children,
  delay,
}) => {
  return (
    <RevealContainer
      ref={reveal.ref as React.RefObject<HTMLDivElement>}
      $visible={reveal.isVisible}
      $direction={direction}
      $delay={delay}
    >
      {children}
    </RevealContainer>
  );
};

export default memo(Reveal);
