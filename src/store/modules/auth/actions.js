import { FIREBASE_API } from "../../../../api-keys";

export default {
  // Create a new user acc
  async signUp({ dispatch }, payload) {
    return dispatch("auth", { ...payload });
  },
  // Sign in existing user
  async signInWithPassword({ dispatch }, payload) {
    return dispatch("auth", { ...payload, mode: "signIn" });
  },
  // Sign out user
  signOut({ commit }, payload) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    commit("setUser", payload);
  },
  // Auth func based on payload and mode
  async auth({ commit }, payload) {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API}`;

    if (payload.mode == "signIn") {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API}`;
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const resData = await res.json();

    if (!res.ok) {
      const error = new Error(resData.message || "Failed to authenticate.");
      throw error;
    }

    localStorage.setItem("token", resData.idToken);
    localStorage.setItem("userId", resData.localId);

    commit("setUser", {
      token: resData.idToken,
      userId: resData.localId,
      tokenExpiration: resData.expiresIn,
    });
  },
  tryLogin({ commit }) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      commit("setUser", {
        token,
        userId,
        tokenExpiration: null,
      });
    }
  },
};
