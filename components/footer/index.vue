<template>
  <div>
    <div class="footer-section">
      <div class="section-announcement-left footer-heading">
        <p>Lets Connect</p>
      </div>

      <div class="footer-content">
        <div class="footer-content-1">
          <div>
            <span>Email</span>
            <p>
              <a href="mailto:trentoncotten@formativeproductions.com"
                >trentoncotten@formativeproductions.com</a
              >
            </p>
          </div>
          <!-- <div>
            <span>Location</span>
            <p>Denver, Colorado</p>
          </div> -->
        </div>
        <div class="footer-content-2">
          <div>
            <span>Phone</span>
            <p><a href="tel:3034379327">303-437-9327</a></p>
          </div>
          <!-- <div class="social">
            <div>Instagram</div>
            <div>Vimeo</div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.baseLayoutStyle {
  display: flex;
  flex-direction: column;
}

.baseContentDiv {
  min-height: 100px;
  line-height: 2.5;
  padding: 30px;
  text-transform: uppercase;

  span {
    color: #e3b047;
    font-weight: bold;
    margin-bottom: 24px;
  }

  p {
    font-size: 24px;
    font-weight: bold;
    margin: 15px auto;

    a {
      color: #131514 !important;
    }
  }

  &:first-child {
    border-bottom: 2px solid #131514;
  }

  @media only screen and (max-width: 600px) {
    border-bottom: 2px solid #131514;
  }
}
.footer {
  &-section {
    @extend .baseLayoutStyle;
    padding: 0 !important;
    margin-top: 48px;
  }

  &-heading {
    width: 100%;
    padding: 24px 50px;

    p {
      font-size: 72px;
      font-weight: bold;
      color: #131514;
      text-transform: uppercase;

      @media only screen and (max-width: 600px) {
        font-size: 42px;
      }
      @media only screen and (max-width: 480px) {
        font-size: 36px;
      }
    }
  }

  &-content {
    display: flex;
    border-top: 2px solid #131514;
    border-bottom: 2px solid #131514;

    @media only screen and (max-width: 600px) {
      flex-direction: column;

      div {
        width: 100%;
      }
    }

    &-1 {
      @extend .baseLayoutStyle;
      width: 70%;
      border-bottom: 2px solid black;
      @media only screen and (max-width: 800px) {
        width: max-content;
        font-size: 15px !important;
      }

      div {
        width: 100%;
        padding: 20px;
        @media only screen and (min-width: 850px) {
          padding: 20px 50px;
        }
        span {
          color: #e3b047;
          font-weight: bold;
          margin-bottom: 24px;
        }

        p {
          font-size: 24px;
          font-weight: bold;
          margin: 15px auto;

          a {
            color: #131514 !important;
          }

          @media only screen and (max-width: 850px) {
            font-size: 15px;
          }

          @media only screen and (max-width: 600px) {
            font-size: 13px;
          }

          @media only screen and (max-width: 600px) {
            font-size: 12px;
          }
          @media only screen and (max-width: 350px) {
            font-size: 12px;
          }
        }
      }
    }

    &-2 {
      @extend .baseLayoutStyle;
      border-left: 2px solid #131514;
      border-bottom: 2px solid black;
      flex: 1;

      div {
        width: 100%;
        padding: 20px;

        @media only screen and (min-width: 850px) {
          padding: 20px 50px;
        }
        span {
          color: #e3b047;
          font-weight: bold;
          margin-bottom: 24px;
        }

        p {
          font-size: 24px;
          font-weight: bold;
          margin: 15px auto;

          a {
            color: #131514 !important;

            &:hover {
              color: #e3b047;
            }
          }

          @media only screen and (max-width: 850px) {
            font-size: 15px;
          }

          @media only screen and (max-width: 600px) {
            font-size: 13px;
          }

          @media only screen and (max-width: 600px) {
            font-size: 12px;
          }
          @media only screen and (max-width: 350px) {
            font-size: 12px;
          }
        }
      }
    }
  }
}

.social {
  display: flex;
  justify-content: center;
  padding: 0px !important;

  div {
    padding: 60px;
    &:first-child {
      border: none !important;
      border-right: 2px solid #131514;
    }
  }
}
</style>
