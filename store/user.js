export const state = () => ({
  username: null,
  logo: null,
  token: null,
});

export const mutations = {
  setToken(state, token) {
     state.token = token;
  },
  setUsername(state, username) {
    state.username = username;
 },
 setLogo(state,logo){
   state.logo = logo;
 }
};

export const actions = {
  logout(context) {
    context.commit('setToken',null)
    context.commit('setUsername',null)
    context.commit('setLogo',null)
    context.app.$cookies.remove('cookie-token')
  }   
}