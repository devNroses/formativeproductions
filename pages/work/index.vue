<template>
  <div class="work-wrapper">
    <div class="work-bg" />
    <div class="section">
      <h1 class="work-heading">
        Check out<br />
        <span>Our Recent Projects</span>
      </h1>
    </div>

    <div class="section">
      <div
        @click="toggleShowVideo('536417585')"
        class="section-video work-video"
      >
        <img src="~/assets/img/demo-reel.png" />
      </div>
    </div>

    <div class="section">
      <div class="work-card" @click="toggleShowVideo('487463591')">
        <div class="section-video work-video">
          <img src="~/assets/img/colorado-springs-museum.png" />
        </div>
        <p class="work-card-title">Real Peopl / Real Story</p>
        <p class="work-card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="work-card" @click="toggleShowVideo('536427164')">
        <div class="section-video work-video">
          <img src="~/assets/img/football-season.png" />
        </div>
        <p class="work-card-title">Football Season</p>
        <p class="work-card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>

    <VideoModal :showModal="show" :viewVideoid="workVideoId" />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import VideoModal from "../../components/videoModal/index.vue";
export default Vue.extend({
  components: {
    VideoModal
  },
  data() {
    return {
      show: false,
      workVideoId: ""
    };
  },
  methods: {
    toggleShowVideo(videoId: string) {
      this.workVideoId = videoId;
      this.show = !this.show;
    }
  }
});
</script>

<style lang="scss">
iframe {
  width: 100% !important;
}
</style>

<style lang="scss" scoped>
.work {
  &-wrapper {
    display: flex;
    flex-direction: column;
  }

  &-bg {
    width: 100%;
    height: 102px;
    background-color: black;
    @media only screen and (max-width: 480px) {
      height: 142px;
    }
  }

  &-heading {
    font-size: 48px;
    font-weight: 600;
    margin-top: 40px;
    @media only screen and (max-width: 480px) {
      font-size: 28px;
      margin-top: 20px;
    }
  }

  &-video {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 300px;
    max-width: 950px;
    margin: 0 auto;

    img {
      flex-shrink: 0.5;
      min-width: 100%;
      min-height: 100%;
      margin-top: 65px;
      margin-left: 30px;
    }
  }

  &-card {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    max-width: 500px;
    height: 100%;
    width: 100%;

    &:hover {
      cursor: pointer;
    }

    &-title {
      padding-top: 20px;
      font-size: 22px;
      font-weight: 700;
      color: #e3b047;
    }

    &-content {
      margin-top: 0px;
      line-height: 1.5;
      text-align: left;
    }

    .work-video {
      height: 200px;
      overflow: hidden;
      margin-bottom: -25px;
    }

    &:nth-child(even) {
      align-self: flex-end;
      margin-top: 40px;
    }
  }
}
</style>
