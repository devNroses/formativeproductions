import './App.css';

import React from 'react';
import ReactPlayer from 'react-player';

import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ReactPlayer
        url="https://vimeo.com/536417585?embedded=true&source=vimeo_logo&owner=122570197"
        controls={false}
        loop={true}
        playing={true}
        muted={true}
        autoPlay={true}
        volume={0}
      />
    </div>
  );
};

export default App;
