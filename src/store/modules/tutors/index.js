import getters from "@/store/getters";
import actions from "./actions";
import mutations from "./mutations";

export const tutors = {
  state() {
    return {
      tutors: null,
    };
  },
  actions: {
    ...actions,
  },
  mutations: {
    ...mutations,
  },
  getters: {
    ...getters,
  },
};
