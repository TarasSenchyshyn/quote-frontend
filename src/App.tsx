import React from 'react';

import { Header } from './components/header/header';
import { RoutingConfig } from './routing/routing';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RoutingConfig />
    </div>
  );
}

export default App;
