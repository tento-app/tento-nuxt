export const state = () => ({
    like: null,
    classLike: null,
    join: null,
    classJoin: null,
  });
  
export const mutations = {
    setLike(state,bool){
        state.like = bool
    },
    setClassLike(state,bool){
        state.classLike  = bool
    },
    setJoin(state,bool){
        state.join  = bool
    },
    setClassJoin(state,bool){
        state.classJoin  = bool
    },
};