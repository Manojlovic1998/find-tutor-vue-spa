import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

const auth = {
  state() {
    return {};
  },
  mutations: {
    ...mutations,
  },
  actions: {
    ...actions,
  },
  getters: {
    ...getters,
  },
};

export default auth;
