import { css, keyframes, styled } from 'styled-components';

export type Direction = 'up' | 'left' | 'right' | 'zoom';

interface RevealProps {
  $visible: boolean;
  $direction?: Direction;
  $delay?: number;
  $duration?: number;
}

export const RevealContainer = styled.div<RevealProps>`
  opacity: 0;
  will-change: opacity, transform;

  ${({ $visible, $direction = 'up', $delay = 0, $duration = 0.65 }) =>
    $visible &&
    css`
      animation: ${animationMap[$direction]} ${$duration}s
        cubic-bezier(0.22, 1, 0.36, 1) ${$delay}s both;
    `}
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(48px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeLeft = keyframes`
  from { opacity: 0; transform: translateX(-48px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeRight = keyframes`
  from { opacity: 0; transform: translateX(48px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
`;

const animationMap: Record<Direction, ReturnType<typeof keyframes>> = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  zoom: zoomIn,
};
