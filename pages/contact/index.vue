<template>
  <div class="contact-wrapper">
    <div class="contact-landing">
      <img src="~/assets/img/contact-placeholder.jpg" />
    </div>
    <div class="contact-content-wrapper">
      <div class="section">
        <h1>
          WE LOVE NEW <br />
          <span>CHALLENGES</span>
        </h1>
        <p>
          Have a project or an idea you’d like to collaborate on? Interested in
          what Formative Productions can do for you?
        </p>
        <p>
          Please provide as much detail about your project below or contact us
          via:
        </p>

        <a href="mailto:trentoncotten@formativeproductions.com"
          >trentoncotten@formativeproductions.com</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.contact {
  &-wrapper {
    display: flex;
    flex-direction: column;
  }

  &-content-wrapper {
    padding: 40px 60px;
  }

  &-landing {
    height: 70vh;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    img {
      min-width: 100%;
      min-height: 100%;
      flex-shrink: 0.87;
    }
  }
}
</style>
