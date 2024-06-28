import { RouterProvider, createRouter } from '@tanstack/react-router';
import React from 'react';

import { AppProvider } from './providers/app';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
};

export default App;
