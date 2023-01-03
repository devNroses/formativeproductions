import './App.css';

import React from 'react';

import About from './components/About';
import FeaturedVideo from './components/FeaturedVideo';
import Footer from './components/Footer';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <FeaturedVideo />
      <About />
      <Footer />
    </div>
  );
};

export default App;
