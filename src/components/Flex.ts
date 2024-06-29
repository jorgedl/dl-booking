import styled, { css } from 'styled-components';

export const Flex = styled.div<{
  $justify?: 'space-between';
  $align?: 'center';
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

  display: flex;
  gap: var(--margin-xs);
`;
