import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { RangePicker } from '@/components/RangePicker';

import * as S from './Search.styles';

export const Search: React.FC = () => {
  return (
    <S.Container>
      <Input
        onChange={({ target: { value } }) => console.log({ value })}
        placeholder="Select the location"
        label="Where"
      />
      <RangePicker
        placeholder="Select the dates"
        onChange={(d) => console.log({ d })}
      />
      <Button>Search</Button>
    </S.Container>
  );
};
