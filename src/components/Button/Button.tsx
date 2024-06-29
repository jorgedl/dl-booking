import * as S from './Button.styles';

export const Button: React.FC<{
  children?: React.ReactNode | string;
  className?: string;
  disabled?: boolean;
  onClick?(): void;
}> = ({ children, className, disabled, onClick }) => (
  <S.Button
    onKeyDown={({ key }) => key === 'Enter' && onClick && onClick()}
    onClick={onClick}
    className={className}
    disabled={disabled}
  >
    {children}
  </S.Button>
);
