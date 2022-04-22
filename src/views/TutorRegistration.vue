<template>
  <BaseMain>
    <BaseHero>
      <div class="col-12 mt-5">
        <h1 class="text-center">Register as a Tutor</h1>
      </div>
      <div class="col-8 col-md-5 col-lg-4 mx-auto mt-5">
        <form @submit.prevent="onTutorFormSubmit">
          <div class="form-group">
            <label for="name" class="input-label">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              v-model.trim="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label for="desc" class="input-label">Description</label>
            <textarea
              name="desc"
              id="desc"
              class="form-control"
              v-model.trim="description"
              placeholder="I am a... I specialize in..."
              required
            />
          </div>
          <div class="form-group mt-3">
            <label for="email" class="input-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              v-model.trim="email"
              placeholder="example@domain.com"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label for="rate" class="input-label"
              >What is your hourly rate?</label
            >
            <input
              type="number"
              name="rate"
              id="rate"
              class="form-control"
              v-model.trim="rate"
              placeholder="$40"
              required
            />
          </div>
          <p class="mt-3">What are your areas of expertise?</p>
          <div class="form-check">
            <label for="frontend" class="form-check-label">Frontend</label>
            <input
              type="checkbox"
              name="frontend"
              value="Frontend"
              id="frontend"
              class="form-check-input"
              v-model.trim="tags"
            />
          </div>
          <div class="form-check">
            <label for="backend" class="form-check-label">Backend</label>
            <input
              type="checkbox"
              name="backend"
              value="Backend"
              id="backend"
              class="form-check-input"
              v-model.trim="tags"
            />
          </div>
          <div class="form-check">
            <label for="career" class="form-check-label">Career</label>
            <input
              type="checkbox"
              name="career"
              value="Career"
              id="career"
              class="form-check-input"
              v-model.trim="tags"
            />
          </div>

          <BaseButton type="submit" class="mt-4">Register</BaseButton>
        </form>
      </div>
    </BaseHero>
  </BaseMain>
</template>

<script>
import BaseMain from "../components/UI/BaseMain.vue";
import BaseHero from "../components/UI/BaseHero.vue";
import BaseButton from "../components/UI/BaseButton.vue";

export default {
  data() {
    return {
      name: "",
      email: "",
      rate: "",
      description: "",
      tags: [],
    };
  },
  components: {
    BaseMain,
    BaseHero,
    BaseButton,
  },
  methods: {
    onTutorFormSubmit() {},
  },
};
</script>
