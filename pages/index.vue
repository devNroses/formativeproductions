<template>
  <div class="landing-container">
    <div class="landing-feature-video">
      <video-wrapper :player="'vimeo'" videoId="536417585" />
    </div>

    <div class="intro">
      <div class="intro-title">
        <p>WE ARE</p>
        <p>FORMATIVE</p>
        <p>PRODUCTIONS</p>
      </div>
      <div class="svg"><img src="~/assets/img/arrow.svg" /></div>
      <div class="work">
        <p>
          Specializing in visual storytelling, Formative Productions is your
          go-to source for excellent results. From development to production,
          our company is here to transmit your ideas into a stunning visual
          representation.
        </p>
      </div>
      <div id="work" name="work" class="intro-title gallery-title">
        <p>OUR WORK</p>
      </div>
      <div id="#gallery" class="gallery">
        <div v-on:mouseover="mouseover('487463591')">
          <div
            v-show="hover && activeVideoId === '487463591'"
            class="gallery-video"
          >
            <video-wrapper :player="'vimeo'" videoId="487463591" />
          </div>
          <img src="~/assets/img/realPeople.png" />
        </div>
        <div v-on:mouseover="mouseover('536427164')">
          <div
            v-show="hover && activeVideoId === '536427164'"
            class="gallery-video"
          >
            <video-wrapper :player="'vimeo'" videoId="536427164" />
          </div>
          <img src="~/assets/img/video2.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import VideoModal from "../components/videoModal/index.vue";

export default Vue.extend({
  components: {
    VideoModal
  },
  transition: "home",
  data() {
    return {
      hover: false,
      activeVideoId: "",
      workList: [
        {
          videoSrc: "487463591",
          imgSrc: "realPeople.png"
        },
        {
          videoSrc: "536427164",
          imgSrc: "video2.png"
        }
      ]
    };
  },
  methods: {
    mouseover(videoId: string) {
      this.activeVideoId = videoId;
      this.hover = true;
    },
    mouseleave() {
      this.hover = false;
      this.activeVideoId = "";
    }
  }
});
</script>

<style lang="scss">
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
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

  @media only screen and (max-width: 600px) {
    font-size: 14px !important;
  }

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
    width: 100%;
    overflow: hidden;
  }
}

.landing-feature-video {
  position: relative;
  padding-bottom: 56.25%;
  margin-top: -20px;
  height: 0;
  height: 100%;
  max-width: 100%;

  @media only screen and (max-width: 540px) {
    padding-bottom: 58.25%;
  }
}

.landing-feature-video iframe,
.landing-feature-video object,
.landing-feature-video embed {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}

.intro {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: white;
  margin-top: 40px;
  margin-bottom: -20px;
  padding: 30px 15px 40px;

  &-title {
    p {
      font-size: 9.5vw;
      line-height: 8.5vw;
      font-weight: 400;
      color: #131514;
      padding-left: 50px;

      &:first-child {
        color: #e3b047;
      }
    }
  }

  div {
    width: 100%;
    &.svg {
      display: flex;
      justify-content: center;
      padding-left: 80px;

      img {
        width: 50vw;
      }
    }
  }
}

.work {
  display: flex;
  justify-content: flex-end;

  p {
    text-align: right;
    font-size: 2.5vw;
    line-height: 3.75vw;
    padding-right: 50px;
    width: 55vw;
  }
}

.gallery {
  width: 90vw;
  height: 400px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  color: white;
  padding: 10px;
  margin-top: 60px;

  &-title {
    margin-top: 40px;
  }

  div {
    display: inline-block;
    width: 100%;
    max-width: 780px;
    min-width: 450px;
    overflow: hidden;
    height: 100%;
    transition: transform 1.2s;
    will-change: transform;

    :hover,
    :focus {
      transform: translateY(-1px);
    }

    img {
      width: 100%;
      min-height: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }
  }

  &-video {
    left: 0;
    right: 0;
    top: 0;
    background-color: #111;

    iframe,
    object,
    embed {
      display: block;
      width: 80vw;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
    }
  }
}
</style>
