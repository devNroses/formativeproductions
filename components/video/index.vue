<template>
  <div>
    <button class="uk-button uk-button-primary" @click="showModal = true">
      Show Modal
    </button>

    <modal v-bind="showModal">
      <div class="modal-header">
        <h3>Hey John Im Here</h3>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class VideoModal extends Vue {}
</script>

<style lang="scss" scoped></style>
