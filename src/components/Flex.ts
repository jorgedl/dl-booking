import styled, { css } from 'styled-components';

export const Flex = styled.div<{
  $justify?: 'space-between' | 'center' | 'end';
  $align?: 'center' | 'end';
  $vertical?: boolean;
  $gap?: 'small' | 'medium' | 'large';
}>`
  ${({ $justify }) =>
    $justify &&
    css`
      justify-content: ${$justify};
    `}

  ${({ $align }) =>
    $align &&
    css`
      align-items: ${$align};
    `}

  ${({ $vertical }) =>
    $vertical &&
    css`
      flex-direction: column;
    `}

    ${({ $gap }) => {
    switch ($gap) {
      case 'large':
        return 'gap: var(--margin-lg);';
      case 'medium':
        return 'gap: var(--margin-md);';
      case 'small':
      default:
        return 'gap: var(--margin-xs);';
    }
  }}

  display: flex;
`;
