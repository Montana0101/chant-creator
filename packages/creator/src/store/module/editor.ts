import { core } from '@chant/common/utils'

type State = {
  componentList: any[]
  current: object
}

export default {
  namespaced: true,
  state: () => ({
    componentList: [], // 组件列表
    current: {} // 当前组件
  }),
  mutations: {
    // 设置组件列表
    setComponentList(state: State, list: object[]) {
      state.componentList = core.clone(list)
    },
    // 设置当前组件
    setCurrent(state: State, row: object) {
      state.current = row
    }
  },
  actions: {},
  getters: {}
}
