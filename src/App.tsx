import React from 'react';
import { Global, css } from '@emotion/react';
import { globalStyles } from './styles/global';
import { NavBar } from './views/navbar';

function App() {
  return (
    <div>
        <Global styles={globalStyles} />
        <NavBar />
    </div>
  );
}

export default App;
