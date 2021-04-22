<template>
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
</template>

<style lang="scss" scoped>
 .header-container {
   background-color: rgba(255, 255, 255, .05);
   backdrop-filter: blur(5px);
   display: flex;
   justify-content: space-between;
   padding: 0 50PX;
   height: 80px;
   position: sticky;
   top: 0;
   z-index: 1;

   div {
    padding: 30px 0;
    color: white;
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
