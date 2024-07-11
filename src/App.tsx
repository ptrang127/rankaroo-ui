import React, { FC } from 'react';
import './App.css';

import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App: FC = () => {
  return (
    <>
      <div className="container mx-auto w-screen h-screen">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;