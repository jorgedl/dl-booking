import styled, { css } from 'styled-components';

export const Button = styled.button<{ disabled?: boolean }>`
  border: 0;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: var(--onPrimary);
  font-weight: 700;
  padding: 0 var(--padding-md);
  height: var(--control-height);
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: var(--hoverPrimary);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background: var(--disabled);

      &: hover {
        background: var(--disabled);
      }
    `}
`;
