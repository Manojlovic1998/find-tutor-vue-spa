import { FIREBASE_API } from "../../../../api-keys";

export default {
  async signUp({ commit }, payload) {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const resData = await res.json();

    if (!res.ok) {
      const error = new Error(resData.message || "Failed to authenticate.");
      throw error;
    }

    commit("setUser", {
      token: resData.idToken,
      userId: resData.localId,
      tokenExpiration: resData.expiresIn,
    });
  },
  async signInWithPassword({ commit }, payload) {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const resData = await res.json();

    if (!res.ok) {
      const error = new Error(resData.message || "Failed to authenticate.");
      throw error;
    }

    commit("setUser", {
      token: resData.idToken,
      userId: resData.localId,
      tokenExpiration: resData.expiresIn,
    });
  },
  signOut({ commit }, payload) {
    commit("setUser", payload);
  },
};
