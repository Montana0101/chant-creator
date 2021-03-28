import { App } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import elementLoader from './element'

// 全局组件
function component(app: App<Element>) {
  // vue-draggable
  app.component('draggable', VueDraggableNext)
  // element-ui加载
  elementLoader(app)
}

export default component
