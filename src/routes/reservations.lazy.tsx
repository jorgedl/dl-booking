import { createLazyFileRoute } from '@tanstack/react-router';

import { Reservations } from '@/pages/Reservations';

export const Route = createLazyFileRoute('/reservations')({
  component: Reservations,
});
