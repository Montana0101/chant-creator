import { App } from 'vue'
import { defineAsyncComponent } from 'vue'

const ChantButton = defineAsyncComponent(() => import('./ChantButton.vue'))
const ChantField = defineAsyncComponent(() => import('./ChantField.vue'))
const ChantSwipe = defineAsyncComponent(() => import('./ChantSwipe.vue'))
const ChantText = defineAsyncComponent(() => import('./ChantText.vue'))

function loader(app: App<Element>) {
  app.component('ChantButton', ChantButton)
  app.component('ChantField', ChantField)
  app.component('ChantSwipe', ChantSwipe)
  app.component('ChantText', ChantText)
}

export default loader
