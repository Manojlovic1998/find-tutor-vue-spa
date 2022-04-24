import { FIREBASE_REALTIME_DB } from "../../../../api-keys";

export default {
  async registerTutor({ rootGetters }, payload) {
    // Auth
    let token = rootGetters.token;
    // UserId
    let userId = rootGetters.userId;
    // Tutor Data
    const tutorData = {
      name: payload.name,
      email: payload.email,
      rate: payload.rate,
      tags: payload.tags,
    };
    // res
    let res = await fetch(
      `${FIREBASE_REALTIME_DB}tutors/${userId}.json?auth=${token}`,
      {
        method: "PUT",
        body: JSON.stringify(tutorData),
      }
    );

    const resData = await res.json();

    if (!res.ok) {
      const error = new Error(
        resData.message ||
          "Tutor registration failed, please check the provided information or try again later."
      );
      throw error;
    }
  },
  async fetchTutors({ commit }) {
    let res = await fetch(`${FIREBASE_REALTIME_DB}tutors.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let resData = await res.json();

    if (!res.ok) {
      let error = new Error(
        resData.message || "Oops, could not connect to server."
      );
      throw error;
    }

    commit("setTutors", resData);
  },
};
