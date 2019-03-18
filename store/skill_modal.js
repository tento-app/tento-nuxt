export const state = () => ({
    showModal: false
})
  
export const mutations = {
    isShowModal (state) {
        state.showModal = !state.showModal
    }
}