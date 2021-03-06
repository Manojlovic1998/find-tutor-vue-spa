<template>
  <BaseMain>
    <BaseHero>
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
        <BaseButton
          class="btn btn-primary fw-bolder mt-4 mb-5"
          @click="resetFilters"
        >
          Refresh
        </BaseButton>
      </div>
      <div class="col-12 d-flex-inline" v-if="isAuthenticated">
        <BaseButton @click="$router.push({ name: 'tutorRegistration' })"
          >Register As a Tutor</BaseButton
        >
      </div>
      <div class="col-12 d-flex-inline" v-else>
        <p class="fw-bold text-center text-gray">
          If you want to register as a tutor,
          <router-link
            :to="{ name: 'signup', query: { to: 'tutorRegistration' } }"
            >login</router-link
          >
          or
          <router-link
            :to="{
              name: 'signup',
              query: { to: 'tutorRegistration', mode: 'register' },
            }"
            >register</router-link
          >.
        </p>
      </div>
    </BaseHero>
    <div v-if="error" class="col-12">
      <p class="text-center fs-5 fw-bold">{{ error }}</p>
    </div>
    <BaseCard v-for="(tutor, keyId) in tutors" :key="keyId" class="tutor-card">
      <template v-slot:title
        ><p class="fw-bolder fs-5">{{ tutor.name }}</p></template
      >
      <template v-slot:body
        ><p class="text-gray fw-bold">{{ tutor.rate }}</p></template
      >
      <template v-slot:tag>
        <BaseTag class="tag-margin" v-for="tag in tutor.tags" :key="tag">{{
          tag
        }}</BaseTag>
      </template>
      <template v-slot:contact>
        <BaseButton
          class="card-btn"
          @click="$router.push({ name: 'contact', params: { id: keyId } })"
          >Contact</BaseButton
        >
      </template>
      <template v-slot:details>
        <BaseButton class="card-btn" @click="tutorDetailsRedirect(keyId)"
          >View Details</BaseButton
        >
      </template>
    </BaseCard>
  </BaseMain>
</template>

<script>
import BaseHero from "../components/UI/BaseHero.vue";
import BaseCard from "../components/UI/BaseCard.vue";
import BaseMain from "../components/UI/BaseMain.vue";
import BaseTag from "../components/UI/BaseTag.vue";
import BaseButton from "../components/UI/BaseButton.vue";

export default {
  data() {
    return {
      filterCategory: [],
      error: false,
    };
  },
  components: {
    BaseHero,
    BaseCard,
    BaseMain,
    BaseTag,
    BaseButton,
  },
  created() {
    this.$watch(
      this.$route.path,
      () => {
        try {
          if (this.$store.getters.isTutorsDataEmpty) {
            this.error = false;
            this.$store.dispatch("fetchTutors");
          }
        } catch (error) {
          this.error =
            error.message || "Oops, failed to connect to the server.";
        }
      },
      { immediate: true }
    );
  },
  computed: {
    tutors() {
      return this.$store.getters.getTutorsData;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    resetFilters() {
      this.filterCategory = [];
    },
    tutorDetailsRedirect(tutorId) {
      this.$router.push({
        name: "tutor",
        params: { id: tutorId },
      });
    },
  },
};
</script>

<style scoped>
.hero-jumb {
  max-width: 450px;
  width: 100%;
  border-radius: 8px;
}

.form {
  max-width: 500px;
  width: 100%;
  margin: 13px auto 0 auto;
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

.tag-margin:not(:first-child) {
  margin-left: 13px;
}

.card-btn:not(:first-child) {
  margin-left: 13px;
}

.card-btn {
  margin-top: 13px;
}

.tutor-card:not(:first-child) {
  margin-top: 21px;
}
</style>
