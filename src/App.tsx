import './App.css';

import React from 'react';

import FeaturedVideo from './components/FeaturedVideo';
import Header from './components/Header/Header';
import Work from './components/Work';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <FeaturedVideo />
      <Work />
    </div>
  );
};

export default App;
