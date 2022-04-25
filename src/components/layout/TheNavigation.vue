<template>
  <nav class="row">
    <div class="col-12 d-flex">
      <div class="nav-logo">
        <router-link to="/">
          <img src="../../assets/nav-logo.svg" alt="" class="h-100" />
        </router-link>
      </div>
      <ul
        class="
          nav-links
          list-unstyled
          d-flex
          my-auto
          ms-auto
          justify-content-end
        "
      >
        <li><router-link :to="{ name: 'home' }">All Tutors</router-link></li>
        <li class="ms-5" v-if="isAuthenticated">
          <router-link :to="{ name: 'requests' }">Requests</router-link>
        </li>
        <li class="ms-5" v-else>
          <router-link :to="{ name: 'signup' }">SignUp</router-link>
        </li>
        <li class="ms-5" v-if="isAuthenticated">
          <button
            class="btn btn-link p-0 text-decoration-none text-black"
            @click="signOut"
          >
            SignOut
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut", {
        token: null,
        userId: null,
        tokenExpiration: null,
      });
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
nav {
  padding: 21px 13px;
  min-height: 60px;
  height: 100%;
}

.nav-logo {
  height: 2rem;
}

.btn-link {
  color: #222222;
  font-weight: 600;
}

a {
  text-decoration: none;
  font-weight: 600;
  color: #222222;
}

.router-link-active {
  text-decoration: none;
  font-weight: 600;
  color: #222222;
  padding-bottom: 2px;
  border-bottom: 2px solid #222222;
}

.nav-logo > a.router-link-active {
  border: none;
  padding-bottom: 0px;
}
</style>
