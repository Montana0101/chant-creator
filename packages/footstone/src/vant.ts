import { App } from 'vue'
import { Button, Field } from 'vant'

import 'vant/es/button/style'
import 'vant/es/field/style'

// vant组件注册
function vantLoader(app: App<Element>) {
  app.use(Button)
  app.use(Field)
}

export default vantLoader
