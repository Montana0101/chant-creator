import { core } from '@chant/common/utils'
import base from '@/utils/base'

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
      list.forEach((item: any) => {
        if (!item.id) {
          item.id = base.uid()
        }
      })
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
