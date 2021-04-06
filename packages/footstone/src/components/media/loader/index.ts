import { App } from 'vue'
import { defineAsyncComponent } from 'vue'

const ChantVideo = defineAsyncComponent(() => import('../ChantVideo.vue'))

function loader(app: App<Element>) {
  app.component('ChantVideo', ChantVideo)
}

export default loader
