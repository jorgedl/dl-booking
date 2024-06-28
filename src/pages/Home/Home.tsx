import { Link } from '@tanstack/react-router';

import { useProperties } from '@/api/useProperties';
import { Card } from '@/components/Card';

export const Home: React.FC = () => {
  const { data } = useProperties();

  console.log({ data });

  return (
    <>
      <Card>
        DLBooking Home <br />
        <Link to="/book">Book page</Link>
      </Card>
    </>
  );
};
