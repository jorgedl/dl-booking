import { ButtonTypes } from '@/types';

import * as S from './Button.styles';

export const Button: React.FC<{
  children?: React.ReactNode | string;
  className?: string;
  disabled?: boolean;
  onClick?(): void;
  type?: ButtonTypes;
}> = ({ children, className, disabled, onClick, type }) => (
  <S.Button
    onKeyDown={({ key }) => key === 'Enter' && onClick && onClick()}
    onClick={onClick}
    className={className}
    disabled={disabled}
    $type={type}
  >
    {children}
  </S.Button>
);
