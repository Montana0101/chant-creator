import { createApp } from 'vue'
import footstone from '@chant/footstone'
import App from './App.vue'
import router from './router'
import store from './store'
import component from './options/component'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(footstone)
app.mount('#app')

// 全局组件加载
component(app)
