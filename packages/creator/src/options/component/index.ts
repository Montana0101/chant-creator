import { App } from 'vue'
import vuedraggable from 'vuedraggable'
import elementLoader from './element'

// 全局组件
function component(app: App<Element>) {
  // vue-draggable
  app.component('draggable', vuedraggable)
  // element-ui加载
  elementLoader(app)
}

export default component
