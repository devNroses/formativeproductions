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
      <div class="work-card" />
      <div class="work-card" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.work {
  &-wrapper {
    border: 2px dahsed hotpink;
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
    border: 2px solid royalblue;
    max-width: 500px;
    height: 400px;
    width: 100%;

    &:nth-child(even) {
      border: 4px dashed red;
    }
  }
}
</style>
