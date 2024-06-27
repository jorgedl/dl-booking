import { RouterProvider, createRouter } from '@tanstack/react-router';
import React from 'react';

import { GlobalStyle } from './App.styles';
import { AppProvider } from './providers/app';
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
};

export default App;
