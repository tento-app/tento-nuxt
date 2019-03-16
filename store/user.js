export const state = () => ({
  username: null,
  name: null,
  logo: null,
});

export const mutations = {
  setToken(state, token) {
     state.token = token;
  },
  setUsername(state, username) {
    state.username = username;
 }
};