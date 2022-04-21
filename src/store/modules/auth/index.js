import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

const auth = {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
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
