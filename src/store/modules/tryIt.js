export default options => ({
  namespaced: true,
  state: () => ({
    options,
    codeText: '',
    lang: '',
    refBack: null
  }),
  mutations: {
    SET_CODE: (state, data) => {
      state.codeText = data.code
      state.lang = data.lang
      state.refBack = data.back
    },
    CLEAR_DATA: (state) => {
      state.codeText = ''
      state.lang = ''
      state.refBack = null
    }
  },
  actions: {
    setCodeText ({ commit }, data) {
      commit('SET_CODE', data)
    },
    clearData ({ commit }) {
      commit('CLEAR_DATA')
    }
  }
})
