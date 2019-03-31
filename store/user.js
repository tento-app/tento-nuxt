export const state = () => ({
  username: null,
  name: null,
  logo: null,
  token: null,
});

export const mutations = {
  setToken(state, token) {
     state.token = token;
     this.$cookies.set('cookie-token', token, {maxAge: 60 * 60 * 24 * 7})
  },
  setUsername(state, username) {
    state.username = username;
 },
 setLogo(state,logo){
   state.logo = logo;
 }
};

export const actions = {
  logout(state) {
    this.commit('user/setToken',null);
    this.commit('user/setUsername',null);
    this.commit('user/setLogo',null);
    this.$cookies.remove('cookie-token')
  }   
}