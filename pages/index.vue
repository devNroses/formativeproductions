<template>
  <div class="container">
    <div class="header-container">
      <div>Logo</div>
      <div>
        <ul class="header-links">
          <li><nuxt-link to="/work">Work</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </div>
    </div>
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

export default Vue.extend({})
</script>

<style lang="scss">
a {
  color: #131514;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
color: #E3B047;
  }
}

 .header-container {
   background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
   display: flex;
   justify-content: space-between;
   padding: 0 50PX;
   min-height: 60px;
   position: sticky;
   top: 0;

   div {
    padding: 30px 0;
   }

   @media only screen and (max-width: 480px)  {
     justify-content: center;
     align-content: center;
     flex-direction: column;

     div {
       display: flex;
       justify-content: center;
     }

     .header-links {
       margin-left: -20px;

       li{
         &:last-child{
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

</style>
