import styled, { css } from 'styled-components';

export const Container = styled.div<{ $noColumn?: boolean }>`
  padding-left: var(--application-inline-padding);
  padding-right: var(--application-inline-padding);
  padding-top: var(--application-column-padding);
  padding-bottom: var(--application-column-padding);

  ${({ $noColumn }) =>
    $noColumn &&
    css`
      padding-top: 0;
      padding-bottom: 0;
    `}
`;
