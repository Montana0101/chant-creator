export type User = {
  token: string
}

export default {
  namespaced: true,
  state: () => ({
    token: 123456789
  }),
  mutations: {},
  actions: {},
  getters: {}
}
