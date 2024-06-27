import { Link } from '@tanstack/react-router';

import { useProperties } from '@/api/useProperties';

export const Home: React.FC = () => {
  const { data } = useProperties();

  console.log({ data });

  return (
    <>
      <div>DLBooking Home</div>
      <Link to="/book">Book page</Link>
    </>
  );
};
