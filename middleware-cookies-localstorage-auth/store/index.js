import Cookie from "js-cookie"

export const state = () => ({
  authKey: null
});

export const mutations = {
  setAuthKey(state, authKey) {
    Cookie.set("authKey", authKey)
    state.authKey = authKey;
  },
  clearAuthKey(state) {
    Cookie.remove("authKey");
    state.authKey = null
  }
};

export const getters = {
  isAuthenticated(state) {
    return state.authKey !== null;
  },
  getAuthKey(state) {
    return state.authKey;
  }
};
export const actions = {
  initAuth(context, authKey) {
    context.commit("setAuthKey", authKey)
  }
}