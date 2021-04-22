<template>
  <div class="container">
  <Header />
    <!-- <div>
      <Logo />
      <h1 class="title">
        formativeproductions
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/header/index.vue'
export default Vue.extend({
  components: {
    Header
  }
})
</script>
