<template>
  <div class="row base-card">
    <div class="col-12">
      <slot name="title"></slot>
    </div>
    <div class="col-12">
      <slot name="body"></slot>
    </div>
    <div class="col-12">
      <slot name="tag"></slot>
    </div>
    <div class="col-12 d-flex">
      <slot name="contact"></slot>
      <slot name="details"></slot>
    </div>
  </div>
</template>

<style scoped>
.base-card {
  background-color: #ffffff;
  padding: 16px;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
}
</style>