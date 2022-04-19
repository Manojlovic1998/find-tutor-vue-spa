<template>
  <BaseHero>
    <div class="hero-jumb mx-auto">
      <div class="d-flex flex-column h-100 justify-content-center">
        <h1 class="fw-bold text-center">Requests Received</h1>
      </div>
    </div>
  </BaseHero>
</template>

<script>
import BaseHero from "../components/UI/BaseHero.vue";

export default {
  components: {
    BaseHero,
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
</style>