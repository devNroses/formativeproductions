<template>
  <div class="container">
  <Header />
  <div class="landing-container">
    Landing Here
    <div class="landing-social">
      <ul>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Vimeo</a></li>
      </ul>
    </div>
    <div class="landing-video">
      Video goes here
    </div>
  </div>
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

<style lang="scss">
a {
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
  color: #E3B047;
 }
}

ul li {
  list-style-type: none;
}

  .landing{
    &-container{
      background: #131514;
      position: absolute;
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &-video{
      color: hotpink;
      border: 2px dashed hotpink;
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
    }

    &-social{
      border: 1px dashed limegreen;
      display: flex;
      flex-direction: column;
      color: limegreen;
      width: max-content;
      position: absolute;
      top: calc(48% - 40px);
      margin-left: 50px;

      ul li{
        margin-bottom: 30px;
      }
    }
  }
</style>
