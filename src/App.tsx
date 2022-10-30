import './App.css';

import React from 'react';

import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <video width="320" height="240" controls autoPlay={true}>
        <source src="https://vimeo.com/536417585?embedded=true&source=vimeo_logo&owner=122570197" />
      </video>
    </div>
  );
};

export default App;
