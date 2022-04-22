<template>
  <BaseMain>
    <BaseHero>
      <div class="col-8 col-md-5 col-lg-4 mx-auto mt-5">
        <h1 class="text-center">Sign Up</h1>
        <p class="fw-bold text-gray mt-3 text-center" v-if="mode === 'login'">
          You don't have an account yet?
          <router-link @click="switchMode()" to="/signup">Register</router-link>
        </p>
        <p class="fw-bold text-gray mt-3 text-center" v-else>
          You already have an account?
          <router-link @click="switchMode()" to="/signup">LogIn</router-link>
        </p>
        <form @submit.prevent="onSubmit" class="mt-5">
          <p class="text-center text-danger fw-bold" v-if="!formValidStatus">
            Please make sure that you have entered a valid email and password.
          </p>
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="example@mail.com"
              v-model.trim="email"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              v-model.trim="password"
              required
            />
          </div>
          <BaseButton class="mt-4" type="submit">{{
            mode === "login" ? "LogIn" : "Register"
          }}</BaseButton>
        </form>
      </div>
    </BaseHero>
    <teleport to="body">
      <BaseModal
        v-if="isLoading || error"
        :bodyStyle="'d-flex justify-content-center mt-3'"
      >
        <template v-slot:title
          ><p class="fs-5">
            {{ isLoading ? "Authenticating..." : "Authentication Failed" }}
          </p></template
        >
        <template v-slot:body>
          <div class="spinner-border" role="status" v-if="isLoading"></div>
          <p role="status" v-else>{{ error }}</p>
        </template>
        <template v-slot:actions v-if="error">
          <BaseButton @click="closeModal()">Close</BaseButton>
        </template>
      </BaseModal>
      <BaseOverlay
        v-if="isLoading || error"
        @click="closeModal()"
      ></BaseOverlay>
    </teleport>
  </BaseMain>
</template>

<script>
import BaseMain from "../components/UI/BaseMain.vue";
import BaseHero from "../components/UI/BaseHero.vue";
import BaseButton from "../components/UI/BaseButton.vue";
import BaseModal from "../components/UI/BaseModel.vue";
import BaseOverlay from "../components/UI/BaseOverlay.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      formValidStatus: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  components: {
    BaseMain,
    BaseHero,
    BaseButton,
    BaseModal,
    BaseOverlay,
  },
  methods: {
    async onSubmit() {
      this.formValidStatus = true;

      // Form Validation
      if (
        this.password.length < 6 ||
        !this.email.includes("@") ||
        this.email === ""
      ) {
        this.formValidStatus = false;
        return;
      }

      this.formValidStatus = true;
      // Fetch the data
      this.isLoading = true;
      try {
        if (this.mode === "register") {
          await this.$store.dispatch("signUp", {
            email: this.email,
            password: this.password,
          });
        }

        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        this.error = err.message || "Failed to authenticate, try later.";
      }
    },
    switchMode() {
      if (this.mode === "login") {
        this.mode = "register";
      } else {
        this.mode = "login";
      }
    },
    closeModal() {
      this.isLoading = false;
      this.error = null;
    },
  },
};
</script>

<style scoped>
.spinner-border {
  height: 50px;
  width: 50px;
}
</style>
