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

      <div class="contactForm-title">
        <h1>HI FORMATIVE PRODUCTIONS,</h1>
        <span>Project Leaders Information</span>
      </div>
      <div class="contactForm-container">
        <Form />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Form from "./Form.vue";
export default Vue.extend({
  transition: "contact",
  components: {
    Form
  }
});
</script>

<style lang="scss" scoped>
.contact-enter-active,
.contact-leave-active {
  transition: opacity 0.5s;
}
.contact-enter,
.contact-leave-active {
  opacity: 0;
}

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
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  }
}

.contactForm {
  &-title {
    margin-bottom: 25px;
    h1 {
      font-size: 48px;
      font-weight: 900;
      letter-spacing: -2px;
    }

    span {
      font-size: 22px;
      font-style: italic;
      font-weight: 400;
    }
  }
  &-container {
    display: flex;
    flex-wrap: wrap;
  }

  &-select {
    border: 2px dashed dodgerblue;
    padding: 0 25px;
  }
}
</style>
