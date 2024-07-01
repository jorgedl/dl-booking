import styled, { css } from 'styled-components';

import { ButtonTypes } from '@/types';

export const Button = styled.button<{
  disabled?: boolean;
  $type?: ButtonTypes;
}>`
  border: 0;
  border-radius: var(--border-radius);
  color: var(--onPrimary);
  font-weight: 700;
  padding: 0 var(--padding-md);
  height: var(--control-height);
  cursor: pointer;
  transition:
    background 0.3s,
    color 0.3s;
  border: solid transparent 1px;

  ${({ $type }) => {
    switch ($type) {
      case 'warning': {
        return css`
          background: var(--warning);

          &:hover {
            background: var(--hoverWarning);
          }
        `;
      }
      case 'primary':
        return css`
          background: var(--primary);

          &:hover {
            background: var(--hoverPrimary);
          }
        `;
      default:
        return css`
          color: var(--primary);
          border: solid var(--primary) 1px;
          background: #fff;
          &:hover {
            background: var(--primary);
            color: #fff;
          }
        `;
    }
  }}

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
