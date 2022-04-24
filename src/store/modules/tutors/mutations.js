import { SET_TUTORS_DATA } from "./mutation-types";

export default {
  [SET_TUTORS_DATA](state, payload) {
    state.tutorsList = payload;
  },
};
