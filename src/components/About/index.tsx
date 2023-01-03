import './about.scss';

import React from 'react';

import missionImg from '../../assets/images/about-img1.jpg';
import featuredImg from '../../assets/images/about-landing.jpg';

const About: React.FC = () => {
  return (
    <div className="about-wrapper">
      <div
        className="about-feature"
        style={{ backgroundImage: `url(${featuredImg})` }}
      >
        <div className="about-title">
          <p>
            “Whether you’re starting with a vague idea or a fully-fleshed out
            concept, <span>Formative Productions</span> can bring your vision to
            life.”{" "}
          </p>
        </div>
      </div>
      <div className="about-mission">
        <div style={{ backgroundImage: `url(${missionImg})` }}>img</div>
        <div>
          <h2 className="section-title">our mission</h2>
          <p className="section-content">
            To produce visual content that resonates with viewers, regardless of
            genre, scale or platform. From creating the overall strategy, to
            organizing and executing the shoot, to managing the multifaceted
            post-production process, we ensure our clients’ projects are
            seamless from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
