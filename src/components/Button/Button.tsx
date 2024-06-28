import * as S from './Button.styles';

export const Button: React.FC<{
  children?: React.ReactNode | string;
  className?: string;
}> = ({ children, className }) => (
  <S.Button className={className}>{children}</S.Button>
);
