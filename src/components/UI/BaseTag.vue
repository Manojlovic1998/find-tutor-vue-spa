<template>
  <div class="tag-wrapper mb-3 text-gray fw-bold">
    <slot></slot>
  </div>
</template>


<style scoped>
.tag-wrapper {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 8px;
  border: 2px solid rgba(4, 9, 33, 0.32);
}
</style>