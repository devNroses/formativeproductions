import './featured.scss';

import Vimeo from '@u-wave/react-vimeo';

const FeaturedVideo = () => {
  return (
    <div className="featured-section">
      <div className="featured-title">
        <p>Specializing in storytelling and stunning visual representations</p>
        <p>
          We're your go-to source for excellent results. From development to
          production, our company is here to transmit your ideas into a stunning
          visuals.
        </p>
        <p>We Are Formative Productions</p>
      </div>
      <div className="featured-video">
        <Vimeo
          video="536417585"
          width={800}
          height={800}
          autoplay
          loop={true}
          controls={false}
          muted={true}
          responsive={true}
          background={true}
          className="video-feat"
        />
      </div>
    </div>
  );
};

export default FeaturedVideo;
