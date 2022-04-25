<template>
  <BaseMain>
    <BaseHero class="tutor-hero">
      <div class="col-12 d-flex align-items-center">
        <h1 class="d-inline-block">{{ tutor.name }}</h1>
      </div>
      <div class="col-12">
        <h2 class="mt-4">Rate</h2>
        <p class="fs-4 text-gray bg-white d-inline-block px-2 py-1 rate">
          ${{ tutor.rate }}/hour
        </p>
      </div>
      <div class="col-12">
        <h2 class="mt-4">Areas of Expertise</h2>
        <div>
          <BaseTag class="tag" v-for="tag in tutor.tags" :key="tag">{{
            tag
          }}</BaseTag>
        </div>
      </div>
      <div class="col-12">
        <h2 class="mt-4">Description</h2>
        <p class="fw-bold text-gray">
          {{ tutor.description }}
        </p>
      </div>
      <div class="col-12" v-if="$route.name !== 'contact'">
        <BaseButton
          class="mt-3"
          @click="$router.push({ name: 'contact', params: { id: id } })"
          >Contact</BaseButton
        >
      </div>
    </BaseHero>
    <router-view />
  </BaseMain>
</template>

<script>
import BaseMain from "../components/UI/BaseMain.vue";
import BaseHero from "../components/UI/BaseHero.vue";
import BaseButton from "../components/UI/BaseButton.vue";
import BaseTag from "../components/UI/BaseTag.vue";

export default {
  props: ["id"],
  components: {
    BaseMain,
    BaseHero,
    BaseButton,
    BaseTag,
  },
  computed: {
    tutor() {
      const tutors = this.$store.getters.getTutorsData;
      return tutors[this.id];
    },
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
