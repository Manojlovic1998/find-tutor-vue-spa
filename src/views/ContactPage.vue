<template>
  <div class="col-12 mt-5">
    <h3>Send Nemanja a Message</h3>
    <form @submit.prevent class="row flex-column">
      <div class="col-4">
        <label for="email">Your Email</label>
        <input class="form-control" type="email" id="email" name="email" />
      </div>
      <div class="col-4">
        <label for="email">Message</label>
        <textarea
          class="form-control"
          type="text"
          id="message"
          name="message"
        />
      </div>
      <div class="mt-3">
        <BaseButton type="submit">Send</BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "../components/UI/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
};
</script>
