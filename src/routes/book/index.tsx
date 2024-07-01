import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/book/')({
  loader: () => {
    return redirect({
      to: '/',
    });
  },
});
