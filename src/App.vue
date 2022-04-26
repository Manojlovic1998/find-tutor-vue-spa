<template>
  <TheHeader> </TheHeader>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$router.path"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
};
</script>

<style>
body,
html {
  background: #f7f7f7;
}

.text-gray {
  color: #7b7b7b;
}

.fade-enter-from {
  opacity: 0;
  transform: translate(0, 30px);
}

.fade-enter-active {
  transition: 0.6s ease-out;
}

.fade-enter-to {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
