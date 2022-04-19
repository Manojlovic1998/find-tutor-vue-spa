<template>
  <BaseHero>
    <div class="hero-jumb mx-auto">
      <div class="col-12 d-flex flex-column h-100 justify-content-center">
        <h1 class="fw-bold text-center">Find Your Tutor</h1>
        <form class="form d-flex justify-content-evenly" @submit.prevent>
          <div class="ms-2">
            <input
              type="checkbox"
              name="frontend"
              value="frontend"
              id="frontend"
              v-model="filterCategory"
            />
            <label for="frontend" class="ms-1 fs-5">Frontend</label>
          </div>
          <div class="ms-2">
            <input
              type="checkbox"
              name="backend"
              value="backend"
              id="backend"
              v-model="filterCategory"
            />
            <label for="backend" class="ms-1 fs-5">Backend</label>
          </div>
          <div class="ms-2">
            <input
              type="checkbox"
              name="career"
              value="career"
              id="career"
              v-model="filterCategory"
            />
            <label for="career" class="ms-1 fs-5">Career</label>
          </div>
        </form>
      </div>
      <div class="col-12 text-center">
        <button class="btn btn-primary fw-bolder" @click="resetFilters">
          Refresh
        </button>
      </div>
    </div>
  </BaseHero>
</template>

<script>
import BaseHero from "../components/UI/BaseHero.vue";

export default {
  data() {
    return {
      filterCategory: [],
    };
  },
  components: {
    BaseHero,
  },
  methods: {
    resetFilters() {
      this.filterCategory = [];
    },
  },
};
</script>

<style scoped>
.hero-jumb {
  max-width: 450px;
  width: 100%;
  border-radius: 8px;
  height: 157px;
}

.form {
  margin-top: 13px;
}

input[type="checkbox"] {
  height: 16px;
  width: 16px;
  border: 2px solid rgba(4, 9, 33, 0.32);
  box-sizing: border-box;
  border-radius: 2px;
}

input[type="checkbox"]:checked {
  background: #0c5dff;
}
</style>

<style>
.btn-primary {
  padding: 10px 16px;
  border-radius: 8px;
  background: #040921;
  border: none;
  letter-spacing: 2px;
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
