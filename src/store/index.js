import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";
import auth from "./modules/auth/index";
import tutors from "./modules/tutors/index";
import mutations from "./mutations";

const store = createStore({
  modules: {
    auth,
    tutors,
  },
  state() {
    return {
      tutors: [],
    };
  },
  getters: {
    ...getters,
  },
  actions: {
    ...actions,
  },
  mutations: {
    ...mutations,
  },
});

export default store;
