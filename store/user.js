export const state = () => ({
  username: null,
  token: null,
});

export const mutations = {
  setToken(state, token) {
     state.token = token;
  },
  setUsername(state, username) {
    state.username = username;
 }
};