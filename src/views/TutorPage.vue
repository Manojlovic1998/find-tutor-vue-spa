<template>
  <BaseMain>
    <BaseHero class="tutor-hero">
      <div class="col-12 d-flex align-items-center">
        <h1 class="d-inline-block">Nemanja Manojlovic</h1>
      </div>
      <div class="col-12">
        <h2 class="mt-4">Rate</h2>
        <p class="fs-4 text-gray bg-white d-inline-block px-2 py-1 rate">
          $40/hour
        </p>
      </div>
      <div class="col-12">
        <h2 class="mt-4">Areas of Expertise</h2>
        <div>
          <BaseTag class="tag">Frontend</BaseTag>
          <BaseTag class="tag">Backend</BaseTag>
          <BaseTag class="tag">Career</BaseTag>
        </div>
      </div>
      <div class="col-12">
        <h2 class="mt-4">Description</h2>
        <p class="fw-bold text-gray">
          Junior Full-stack Developer & Designer from Sweden.
        </p>
      </div>
      <div class="col-12">
        <BaseButton class="mt-3">Contact</BaseButton>
      </div>
    </BaseHero>
  </BaseMain>
</template>

<script>
import BaseMain from "../components/UI/BaseMain.vue";
import BaseHero from "../components/UI/BaseHero.vue";
import BaseButton from "../components/UI/BaseButton.vue";
import BaseTag from "../components/UI/BaseTag.vue";

export default {
  components: {
    BaseMain,
    BaseHero,
    BaseButton,
    BaseTag,
  },
};
</script>

<style scoped>
.rate {
  border: 2px solid rgba(34, 34, 34, 0.4);
  border-radius: 8px;
}

.tutor-hero {
  margin-top: 21px;
}

.tag:not(:first-child) {
  margin-left: 13px;
}
</style>