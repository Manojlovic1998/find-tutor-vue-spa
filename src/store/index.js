import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";
import auth from "./modules/auth/index";
import mutations from "./mutations";

const store = createStore({
  modules: {
    auth,
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
