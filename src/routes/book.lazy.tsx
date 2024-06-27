import { createLazyFileRoute } from '@tanstack/react-router';

import { Book } from '@/pages/Book';

export const Route = createLazyFileRoute('/book')({
  component: Book,
});
