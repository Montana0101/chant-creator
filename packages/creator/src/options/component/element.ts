import { App } from 'vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElRadio,
  ElSelect,
  ElSwitch,
  ElTabs,
  ElTabPane
} from 'element-plus'

import 'element-plus/lib/theme-chalk/el-button.css'
import 'element-plus/lib/theme-chalk/el-form.css'
import 'element-plus/lib/theme-chalk/el-form-item.css'
import 'element-plus/lib/theme-chalk/el-icon.css'
import 'element-plus/lib/theme-chalk/el-input.css'
import 'element-plus/lib/theme-chalk/el-radio.css'
import 'element-plus/lib/theme-chalk/el-select.css'
import 'element-plus/lib/theme-chalk/el-switch.css'
import 'element-plus/lib/theme-chalk/el-tabs.css'
import 'element-plus/lib/theme-chalk/el-tab-pane.css'

// element组件注册
function elementLoader(app: App<Element>) {
  app.component(ElButton.name, ElButton)
  app.component(ElForm.name, ElForm)
  app.component(ElFormItem.name, ElFormItem)
  app.component(ElIcon.name, ElIcon)
  app.component(ElInput.name, ElInput)
  app.component(ElRadio.name, ElRadio)
  app.component(ElSelect.name, ElSelect)
  app.component(ElSwitch.name, ElSwitch)
  app.component(ElTabs.name, ElTabs)
  app.component(ElTabPane.name, ElTabPane)
}

export default elementLoader
