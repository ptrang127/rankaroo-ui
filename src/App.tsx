import React from 'react';
import GlobalStyle from './style'
import NavBar from './views/navbar';
import { Container } from './style';

function App() {
  return (
    <div>
        <GlobalStyle />
        <Container>
          <NavBar />
        </Container>
    </div>
  );
}

export default App;
