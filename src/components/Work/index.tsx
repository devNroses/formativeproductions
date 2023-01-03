import './work.scss';

import Vimeo from '@u-wave/react-vimeo';
import { useEffect } from 'react';

const Work = () => {
  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    // To check the scroll position on page load
    reveal();
  });

  const videos = ["536427164", "487463591"];
  return (
    <div className="work-section">
      <div className="work-title">
        <div>
          <p>Our</p>
          <p>Work</p>
        </div>
        <div />
      </div>
      <section className="work-container">
        <div className="text-container">
          {videos.map((videoId, i: number) => (
            <div className="text-box reveal" key={i}>
              <div className="box">
                <Vimeo
                  video={videoId}
                  width={800}
                  height={800}
                  autoplay={false}
                  loop={true}
                  controls={false}
                  muted={true}
                  responsive={true}
                  background={true}
                  className="video-feat"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
