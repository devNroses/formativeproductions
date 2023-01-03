import './about.scss';

import React from 'react';

import featuredImage from '../../assets/images/about-landing.jpg';

const About: React.FC = () => {
  return (
    <div className="about-wrapper">
      <div
        className="about-feature"
        style={{ backgroundImage: `url(${featuredImage})` }}
      >
        <div className="about-title">
          <p>
            “Whether you’re starting with a vague idea or a fully-fleshed out
            concept, <span>Formative Productions</span> can bring your vision to
            life.”{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
