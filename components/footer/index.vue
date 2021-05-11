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
            <p>trentoncotten@formativeproductions.com</p>
          </div>
          <div>
            <span>Address</span>
            <p>5555 N SPRINGS LANE, CO 80911</p>
          </div>
        </div>
        <div class="footer-content-2">
          <div>
            <span>Phone</span>
            <p>719-233-3620</p>
          </div>
          <div class="social">
            <div>Instagram</div>
            <div>Vimeo</div>
          </div>
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
    color: #131514;

    @media only screen and (max-width: 850px) {
      font-size: 15px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 13px;
      word-break: break-all;
    }
  }

  &:first-child {
    border-bottom: 1px solid #131514;
  }

  @media only screen and (max-width: 600px) {
    border-bottom: 1px solid #131514;
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
    }
  }

  &-content {
    display: flex;
    border-top: 1px solid #131514;
    border-bottom: 1px solid #131514;

    @media only screen and (max-width: 600px) {
      flex-direction: column;

      div {
        width: 100%;
      }
    }

    &-1 {
      @extend .baseLayoutStyle;
      width: 70%;
      @media only screen and (max-width: 800px) {
        width: max-content;
        font-size: 15px !important;
      }

      div {
        @extend .baseContentDiv;
      }
    }

    &-2 {
      @extend .baseLayoutStyle;
      border-left: 1px solid #131514;
      flex: 1;

      div {
        @extend .baseContentDiv;
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
      border-right: 1px solid #131514;
    }
  }
}
</style>
