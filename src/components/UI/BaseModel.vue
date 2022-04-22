<template>
  <div class="message-modal bg-white d-inline-flex flex-column">
    <div class="w-100 mt-3">
      <slot name="title"></slot>
    </div>
    <hr />
    <div :class="[bodyStyle]">
      <slot name="body"></slot>
    </div>
    <br />
    <div class="mt-auto d-inline ms-auto">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bodyStyle: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
.message-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -75%);
  min-width: 200px;
  max-width: 400px;
  width: 100%;
  min-height: 250px;
  border-radius: 8px;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  padding: 13px 21px;
}
</style>