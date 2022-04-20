<template>
  <BaseMain>
    <BaseHero>
      <div class="col-12 text-center">
        <img src="../assets/404.svg" class="not-found-icon" alt="404 sign" />
        <p class="text-gray page-not-found-message">
          Oops, we could't find that page.
        </p>
        <BaseButton @click="$router.push('/')" class="back-to-home"
          >Back to Home</BaseButton
        >
      </div>
    </BaseHero>
  </BaseMain>
</template>

<script>
import BaseMain from "../components/UI/BaseMain.vue";
import BaseHero from "../components/UI/BaseHero.vue";
import BaseButton from "../components/UI/BaseButton.vue";

export default {
  components: {
    BaseMain,
    BaseHero,
    BaseButton,
  },
};
</script>

<style scoped>
.page-not-found-message {
  margin-top: 34px;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
}

.not-found-icon {
  height: 100px;
  margin-top: 55px;
}

.back-to-home {
  margin-top: 34px;
}
</style>
