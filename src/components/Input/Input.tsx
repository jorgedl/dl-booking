import { forwardRef } from 'react';

import * as S from './Input.styles';

interface Props {
  label: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  onClick?(e: React.FocusEvent<HTMLDivElement>): void;
  value?: string;
  defaultValue?: string;
  onKeyDown?(e: React.KeyboardEvent<HTMLInputElement>): void;
  ref?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
}

export const InputComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  Props
> = ({ label, value, placeholder, onClick, onChange }, ref) => {
  return (
    <div onFocus={onClick}>
      <S.Label>
        {label}{' '}
        <S.Input
          placeholder={placeholder}
          value={value}
          ref={ref}
          onChange={onChange}
        />
      </S.Label>
    </div>
  );
};

export const Input = forwardRef(InputComponent);
