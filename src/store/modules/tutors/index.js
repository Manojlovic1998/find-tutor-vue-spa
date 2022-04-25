import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const tutors = {
  state() {
    return {
      tutorsList: {},
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

export default tutors;
