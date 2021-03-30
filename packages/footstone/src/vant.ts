import { App } from 'vue'
import { Button, Field, Swipe, SwipeItem } from 'vant'

import 'vant/es/button/style'
import 'vant/es/field/style'
import 'vant/es/swipe/style'
import 'vant/es/swipe-item/style'

// vant组件注册
function vantLoader(app: App<Element>) {
  app.use(Button)
  app.use(Field)
  app.use(Swipe)
  app.use(SwipeItem)
}

export default vantLoader
