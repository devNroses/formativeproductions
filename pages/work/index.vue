<template>
  <div class="work-wrapper">
    <div class="work-bg" />
    <div class="section">
      <h1 class="work-heading">
        Check out<br />
        <span>Our Recent Projects</span>
      </h1>
    </div>

    <!-- <div class="section">
      <div
        @click="toggleShowVideo('536417585')"
        class="section-video work-video"
      >
        <img src="~/assets/img/demo-reel.png" />
      </div>
    </div> -->

    <div class="section">
      <div
        class="work-card"
        @click="
          setVideoId('487463591');
          toggleModal();
        "
      >
        <div class="video-container work-video">
          <img src="~/assets/img/realPeople.png" />
        </div>
        <p class="work-card-title">Real People/ Real Story</p>
        <!-- <p class="work-card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p> -->
      </div>
      <div
        class="work-card"
        @click="
          setVideoId('536427164');
          toggleModal();
        "
      >
        <div class="video-container work-video">
          <img src="~/assets/img/video2.png" />
        </div>
        <p class="work-card-title">In Game Sports Entertainment</p>
        <!-- <p class="work-card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p> -->
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
  transition: "work",
  data() {
    return {
      show: false,
      workVideoId: ""
    };
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    },
    setVideoId(id: string) {
      this.workVideoId = id;
    }
  }
});
</script>

<style lang="scss">
.work-enter-active,
.work-leave-active {
  transition: opacity 0.5s;
}
.work-enter,
.work-leave-active {
  opacity: 0;
}
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
    width: 100% !important;

    img {
      width: 102%;
      height: auto !important;
    }
  }

  &-card {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    max-width: 800px;
    height: 100%;
    width: 100%;

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
      overflow: hidden;
      margin-bottom: -25px;
    }

    &:nth-child(even) {
      align-self: flex-end;
      margin-top: 30px;
    }
  }
}
</style>
