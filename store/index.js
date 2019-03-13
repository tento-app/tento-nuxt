export const actions = {
    nuxtServerInit({ commit }, { req }){
        if (req.session && req.session.token) {
          commit('user/setToken', req.session.token);
        } else {
          commit('user/setToken', null);
        }
     }
};