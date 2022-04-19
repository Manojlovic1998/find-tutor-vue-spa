<template>
  <button class="btn btn-primary fw-bolder">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn-primary {
  padding: 10px 16px;
  border-radius: 8px;
  background: #040921;
  border: none;
  letter-spacing: 1px;
}

.btn-primary:hover {
  color: #fff;
  background-color: rgba(4, 9, 32, 72%);
  border-color: rgba(4, 9, 32, 72%);
}

.btn-check:active + .btn-primary,
.btn-check:checked + .btn-primary,
.btn-primary.active,
.btn-primary:active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: rgba(4, 9, 32, 72%);
  border-color: rgba(4, 9, 32, 72%);
}

.btn-check:focus + .btn-primary,
.btn-primary:focus {
  color: #fff;
  background-color: rgba(4, 9, 32, 72%);
  border-color: rgba(4, 9, 32, 72%);
  box-shadow: 0 0 0 0.25rem rgba(4, 9, 32, 50%);
}

.btn-check:active + .btn-primary:focus,
.btn-check:checked + .btn-primary:focus,
.btn-primary.active:focus,
.btn-primary:active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(4, 9, 32, 50%);
}
</style>