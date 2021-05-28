<template>
  <div class="wrapper">
    <div class="landing-container">
      Landing Here
      <!-- <div class="landing-social">
        <ul>
          <li><a href="#"><img src="~/assets/img/instagram.png" /></a></li>
          <li><a href="#"><img src="~/assets/img/twitter.png" /></a></li>
          <li><a href="#"><img src="~/assets/img/vimeo.png" /></a></li>
        </ul>
      </div> -->
      <div class="landing-video">
        <img src="~/assets/img/video1.jpg" />
        <div class="overlay" />
        <div class="play-button-outer" @click="
          setVideoId('536417585');
          toggleModal();
          "">
          <div class="play-button"></div>
        </div>
      </div>
    </div>

    <div class="section">
      <h1>
        WE ARE <br />
        <span>FORMATIVE <br />PRODUCTIONS</span>
      </h1>
      <p>
        Specializing in visual storytelling, Formative Productions is your go-to
        source for excellent results. From development to production, our
        company is here to transmit your ideas into a stunning visual
        representation.
      </p>

      <nuxt-link to="/about">Learn More About Formative Productions</nuxt-link>
    </div>

    <div class="section">
      <div class="section-announcement section-announcement-right">
        <span>FROM IDEA</span>
        <span>TO PRODUCTION</span>
        <span>TO REALITY</span>
      </div>
    </div>

    <div class="section">
      <div
        class="video-container"
        @click="
          setVideoId('536427164');
          toggleModal();
        "
      >
        <img src="~/assets/img/video2.jpg" />
      </div>
    </div>

    <VideoModal
      :showModal="show"
      :viewVideoid="landingVideoId"
      toggleShowModal="toggleModal"
    />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import VideoModal from "../components/videoModal/index.vue";

export default Vue.extend({
  components: {
    VideoModal
  },
  transition: 'home',
  data() {
    return {
      show: false,
      landingVideoId: ""
    };
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    },
    setVideoId(id: string) {
      this.landingVideoId = id;
    }
  }
});
</script>

<style lang="scss">
   .home-enter-active, .home-leave-active { transition: opacity .5s; }
  .home-enter, .home-leave-active { opacity: 0; }
html,
body {
  height: 100%;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  overflow-x: hidden;
}
a {
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 350ms ease-out;

  &:hover {
    color: #e3b047;
  }
}

ul li {
  list-style-type: none;
}

.landing {
  &-container {
    background: #131514;
    padding: 0;
    margin-bottom: 40px;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  &-video {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: -8px;
    padding: 0;
    top: -10px;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .overlay {
      display: block;
      background: rgba(0, 0, 0, 0.4);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  }

  &-social {
    display: flex;
    flex-direction: column;
    width: max-content;
    position: absolute;
    top: calc(48% - 40px);
    margin-left: 50px;

    @media only screen and (max-width: 540px) {
      display: none;
    }

    ul li {
      margin-bottom: 30px;

      img {
        width: 20px;
      }
    }
  }
}

.section {
  display: flex;
  flex-direction: column;
  margin: 12px 8%;
  padding: 25px;
  word-break: break-all;

  &-video {
    display: flex;
    width: 100%;
    height: auto;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 2.15em rgba(0, 0, 0, 0.25);
  }

  &-announcement {
    display: flex;
    flex-direction: column;
    font-size: 64px;
    font-weight: 700;
    padding: 0 4%;

    &-left {
      text-align: left;
    }
    &-right {
      text-align: right;
    }

    span {
      &:first-child {
        color: #707070;
     
      }

      &:last-child {
        color: #e3b047;
      }
    }

    @media only screen and (max-width: 540px) {
      font-size: 36px;
    }
  }

  h1 {
    font-size: 48px;
    font-weight: 900;

    span {
      color: #e3b047;
    }
  }

  p {
    max-width: 620px;
    font-size: 18px;
    line-height: 2.25;
    margin-top: 24px;
  }

  a {
    color: #e3b047;
    margin-top: 18px;
    font-weight: 800;
    border-bottom: #e3b047 1px solid;
    max-width: fit-content;
    padding-bottom: 4px;

    &:hover {
      color: #f5be4b;
      border-bottom: #f5be4b 1px solid;
    }
  }

  @media only screen and (max-width: 540px) {
    margin: 12px 0;
  }
}

.video {
  width: 100%;
  max-height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 780px) {
    height: 210px;
  }

  img {
    min-width: 100%;
    min-height: 100%;
  }
}

.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  transition: all 300ms ease-in-out;
}

.play-button-outer {
  margin: 25% auto;
  width: 10em;
  height: 10em;
  background-color: rgba(0, 0, 0, 0.25);
  cursor: pointer;
  position: absolute;
  border: 2px solid #fff;
  border-radius: 55%;
  transition: all 350ms ease-out;

   @media only screen and (max-width: 720px) {
     margin-top: 18% auto;
       width: 7em;
  height: 7em;
    }

  &:hover {
    border: 2px solid #e3b047;
  }
}

.play-button {
  margin: 0 auto;
  top: 25%;
  position: relative;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 2.5em 0 2.5em 5em;
  border-color: transparent transparent transparent #e3b047;
  opacity: 0.75;

    @media only screen and (max-width: 720px) {
      top: 27%;
  border-width: 1.5em 0 1.5em 3em;
    }
}

.play-button-outer:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.play-button-outer:hover .play-button {
  opacity: 1;
}

.video {
  &-container {
    display: flex;
    width: 65%;
    justify-content: center;
    align-content: center;
    height: auto;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 2.15em rgba(0, 0, 0, 0.25);
    overflow: hidden;
    margin: 0 auto;
    max-width: 1210px;
    transition: all 0.2s ease-in-out;

    :hover {
      transform: scale(1.2);
      cursor: pointer;
    }

    @media only screen and (max-width: 720px) {
      width: 100%;
    }

      @media only screen and (max-width: 580px) {
      width: 100%;
      max-height: 300px;
    }

    img {
      width: 100%;
      height: auto;
      margin-top: -5px;
      transition: all 0.2s ease-in-out;
      :hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
