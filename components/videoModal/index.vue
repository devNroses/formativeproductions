<template>
  <transition name="fade" appear>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal" role="dialog">
        <div class="close" @click="resetShowModal"><span>X</span></div>

        <video-wrapper :player="'vimeo'" :videoId="viewVideoid" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class VideoModal extends Vue {
  @Prop({ default: "" }) viewVideoid!: string;
  @Prop(Boolean) showModal = false;

  @Emit("toggleShowModal")
  resetShowModal() {
    this.showModal = !this.showModal;
    this.viewVideoid = "";
  }
}
</script>

<style lang="scss">
iframe {
  width: 100% !important;
}
</style>

<style lang="scss" scoped>
.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: 100% !important;
  height: fit-content;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: transparent;
  z-index: 999;
  transform: none;

  .close {
    display: flex;
    justify-content: flex-end;
    width: 90%;
    margin: -20px auto 20px;
    padding: 0px 150px;
    justify-content: flex-end;

    span {
      border: 2px solid white;
      color: white;
      padding: 10px;
      border-radius: 50%;
      font-weight: 900;
      height: 40px;
      transition: 0.3s;
      width: 40px;

      &:hover {
        color: #e3b047;
        border: 2px solid #e3b047;
      }
    }

    @media only screen and (max-width: 770px) {
      padding: 0px 20px;
    }
  }
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: "";
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.98);
  opacity: 1;
  cursor: pointer;
}
/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
