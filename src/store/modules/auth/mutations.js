import { SET_USER_AUTH_STATE } from "./mutation-types";

export default {
  [SET_USER_AUTH_STATE](state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};
