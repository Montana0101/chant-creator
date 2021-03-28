import { App } from 'vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElTabs,
  ElTabPane
} from 'element-plus'

import 'element-plus/lib/theme-chalk/el-button.css'
import 'element-plus/lib/theme-chalk/el-form.css'
import 'element-plus/lib/theme-chalk/el-form-item.css'
import 'element-plus/lib/theme-chalk/el-input.css'
import 'element-plus/lib/theme-chalk/el-select.css'
import 'element-plus/lib/theme-chalk/el-tabs.css'
import 'element-plus/lib/theme-chalk/el-tab-pane.css'

// element组件注册
function elementLoader(app: App<Element>) {
  app.component(ElButton.name, ElButton)
  app.component(ElForm.name, ElForm)
  app.component(ElFormItem.name, ElFormItem)
  app.component(ElInput.name, ElInput)
  app.component(ElSelect.name, ElSelect)
  app.component(ElTabs.name, ElTabs)
  app.component(ElTabPane.name, ElTabPane)
}

export default elementLoader
