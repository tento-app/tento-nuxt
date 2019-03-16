export const state = () => ({
    token: null,
});
  
export const mutations = {
    login (state, payload) {
        state.token = payload;
    },
    logout (state) {
        state.token = null;
    }
};