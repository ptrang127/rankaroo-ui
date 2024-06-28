import React from 'react';
import NavBar from './views/navbar';

import { Global, css } from '@emotion/react';
import theme from "./shared/theme/index";

const bodyColor = css`
  html {
    background-color: ${theme.bg.darkPurple};
    color: ${theme.text.default};
  }
`;

const fontFamily = css`
  body {
    font-family: "Jersey 15", sans-serif;
    margin: 0;
  }
`;

function App() {
  return (
    <div>
        <Global styles={[bodyColor, fontFamily]} />
        <NavBar />
    </div>
  );
}

export default App;
