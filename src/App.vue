<template>
  <TheHeader> </TheHeader>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
body,
html {
  background: #f7f7f7;
}
</style>
