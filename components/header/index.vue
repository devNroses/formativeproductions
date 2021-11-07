<template>
  <nav class="header-container">
    <nuxt-link to="/">
      <div class="header-logo" />
    </nuxt-link>
    <div>
      <ul class="header-links" :class="{ changeColor: changeColor }">
        <li><nuxt-link :to="{ path: '/', hash: '#work' }">Work</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Header extends Vue {
  changeColor: boolean = false;

  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.changeColor = false;
  }

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }

  windowTop = window.top.scrollY;

  onScroll() {
    this.windowTop =
      window.top.scrollY; /* or: e.target.documentElement.scrollTop */

    if (this.windowTop > 580) {
      this.changeColor = true;
    } else {
      this.changeColor = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  display: flex;
  height: auto;
  justify-content: space-between;
  padding: 0 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  div {
    padding: 40px 0;
    width: fit-content;
    color: white;
  }

  @media only screen and (max-width: 480px) {
    justify-content: center;
    align-content: center;
    flex-direction: column;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto -20px;
    }

    .header-links {
      margin-left: -40px;

      li {
        &:last-child {
          padding-right: 30px;
        }
      }
    }
  }
}

.header-links {
  display: flex;
  list-style: none;

  li {
    padding: 0 20px;
  }
}

.changeColor {
  a {
    color: black !important;

    &:hover {
      color: #e3b047 !important;
    }
  }
}

.header-logo {
  width: 80px !important;
  padding: 25px;
  background-color: #e3b047; /* defines the background color of the image */
  mask: url(~/assets/img/formative-logo.svg) no-repeat center / contain;
  -webkit-mask: url(~/assets/img/formative-logo.svg) no-repeat center / contain;
  margin-top: 10px;
}
</style>
