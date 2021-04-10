import { App } from 'vue'
import vuedraggable from 'vuedraggable'
import elementLoader from './element'

// 全局组件
function component(app: App<Element>) {
  // vue-draggable
  app.component('draggable', vuedraggable)
  // element-ui加载
  elementLoader(app)
  // 共用组件加载
  thornLoader(app)
}
// 共用组件加载
function thornLoader(app: App<Element>) {
  const modules = import.meta.globEager('../../components/thorn/**')
  for (const path in modules) {
    const flesh = modules[path].default
    app.component(flesh.name, flesh)
  }
}

export default component
