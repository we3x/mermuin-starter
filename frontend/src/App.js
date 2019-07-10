import React from 'react';
import { StoreProvider } from './Store'
import Router from './router';

function App() {
  return (
    <div>
      <StoreProvider>
        <Router />
      </StoreProvider>
    </div>
  );
}

export default App;
