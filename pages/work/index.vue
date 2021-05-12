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
      <div class="section-video work-video">
        video
      </div>
    </div>

    <div class="section">
      <div class="work-card">
        <div @click="toggleShowVideo" class="section-video work-video">
          video
        </div>
        <transition name="fade" appear>
          <div v-if="show" @click="toggleShowVideo" class="modal-overlay" />
        </transition>
        <transition name="pop" appear>
          <div class="modal" role="dialog" v-if="show">
            <h1>Vue Transitions</h1>
            <p>
              The <code>&lt;transition&gt;</code> component in Vue can create
              wonderful animated entrances and exits.
            </p>
            <button @click="toggleShowVideo" class="button">
              Hide Modal
            </button>
          </div>
        </transition>
        <p class="work-card-title">Colorado Springs museum</p>
        <p class="work-card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="work-card">
        <div class="section-video work-video">
          video
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Work extends Vue {
  show: boolean = false;

  toggleShowVideo() {
    this.show = !this.show;
  }
}
</script>

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
    background-color: hotpink !important;
    height: 300px;
    max-width: 750px;
    margin: 0 auto;
  }

  &-card {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    max-width: 500px;
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

.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  max-width: 22em;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: "";
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
