import React, { FC } from 'react';
import './App.css';
import Navbar from './components/Navbar';

const App: FC = () => {
  return (
    <div class="container mx-auto w-screen h-screen">
      <Navbar />
    </div>
  );
};

export default App;