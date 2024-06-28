import { useProperties } from '@/api/useProperties';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Properties } from '@/components/Properties';
import { Search } from '@/components/Search';

export const Home: React.FC = () => {
  const { data } = useProperties();

  console.log({ data });

  return (
    <>
      <Header>
        <Search />
      </Header>
      <Container>
        <Properties items={data} />
      </Container>
    </>
  );
};
