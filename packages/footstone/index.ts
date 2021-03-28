import { App } from 'vue'
import vantLoader from './src/vant'

function install(app: App<Element>) {
  // vant组件注册
  vantLoader(app)
  // 自定义组件注册
  const modules = import.meta.globEager('./src/components/**/index.ts')
  for (const path in modules) {
    const flesh = modules[path].default
    flesh(app)
  }
}

export default { install }
