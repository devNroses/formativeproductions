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

    <div class="section">
      <h1>WE ARE <br> <span>FORMATIVE <br>PRODUCTIONS</span></h1>
      <p>
        Specializing in visual storytelling, Formative Productions
        is your go-to source for excellent results. From development
        to production, our company is here to transmit your ideas
        into a stunning visual representation.
      </p>

      <a href="#">Learn More About Formative Productions</a>
    </div>

    <div class="section">
      <div class="section-video">
        <div class="video" />
      </div>
    </div>

    <div class="section">
      <div class="section-announcement section-announcement-right">
        <span>FROM IDEA</span>
        <span>TO PRODUCTION</span>
        <span>TO REALITY</span>
      </div>
    </div>

    <div class="section">
      <div class="section-video">
        <div class="video" />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/header/index.vue'
import Footer from '../components/footer/index.vue'
export default Vue.extend({
  components: {
    Header,
    Footer
  }
})
</script>

<style lang="scss">
html, body {
  height: 100%;
  width: 100%;
}
.container{
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
}
a {
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 350ms ease-out;

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
      padding: 0;
      margin-bottom: 40px;
      height: 100vh;
      width: 100vw;
    }

    &-video{
      color: hotpink;
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

  .section{
    display: flex;
    flex-direction: column;
    margin: 12px 8%;
    padding: 25px;
    word-break: break-all;

    &-video{
      display: flex;
      width: 100%;
      height: auto;
      box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 2.15em rgba(0,0,0,0.4);
    }

    &-announcement{
      display: flex;
      flex-direction: column;
      font-size: 64px;
      font-weight: 700;
      padding: 0 4%;

      &-left{
        text-align: left;
      }
      &-right{
        text-align: right;
      }

      span{
        &:first-child{
          -webkit-text-stroke: 2px black;
          color: white;
        }

        &:last-child{
          color: #E3B047;
        }
      }

       @media only screen and (max-width: 540px)  {
         font-size: 36px;
       }
    }

    h1{
      font-size: 48px;
      font-weight: 900;

      span{
        color: #E3B047;
      }
    }

    p{
      max-width: 620px;
      font-size: 18px;
      line-height: 2.25;
      margin-top: 24px;
    }

    a{
      color: #E3B047;
      margin-top: 18px;
      font-weight: 800;
      border-bottom: #E3B047 1px solid;
      max-width: fit-content;
      padding-bottom: 4px;

      &:hover{
        color: #F5BE4B;
        border-bottom: #F5BE4B 1px solid;
      }
    }

     @media only screen and (max-width: 540px)  {
        margin: 12px 0;
       }
  }

  .video{
    background: hotpink;
    width: 100%;
    height: 346px;
  }
</style>
