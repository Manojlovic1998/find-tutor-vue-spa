export default {
  getTutorsData(state) {
    return state.tutorsList;
  },
  isTutorsDataEmpty(state) {
    const tutorDataState = Object.keys(state.tutorsList).length === 0;
    return tutorDataState;
  },
};
