
import React from 'react';

import Routes from './routes';

import './styles/global.css';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;