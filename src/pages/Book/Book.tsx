import { Card } from '@/components/Card';
import { Map } from '@/components/Map';

import * as S from './Book.styles';

export const Book: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.SidePanel>
          <Card>Listar opções aqui</Card>
        </S.SidePanel>
        <Map />
      </S.Container>
    </>
  );
};
