import React from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/global';
import { NavBar } from './views/navbar';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
        <Global styles={globalStyles} />
        <Container>
          <NavBar />
        </Container>
    </div>
  );
}

export default App;
