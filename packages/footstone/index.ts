import { App } from 'vue'

function install(app: App<Element>) {
  // 自定义组件注册
  const modules = import.meta.globEager('./src/components/**/index.ts')
  for (const path in modules) {
    const flesh = modules[path].default
    flesh(app)
  }
}

export default { install }
