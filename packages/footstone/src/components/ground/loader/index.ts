import { App } from 'vue'
import { defineAsyncComponent } from 'vue'

const Button = defineAsyncComponent(() => import('../Button.vue'))
const Field = defineAsyncComponent(() => import('../Field.vue'))
const Image = defineAsyncComponent(() => import('../Image.vue'))
const Swipe = defineAsyncComponent(() => import('../Swipe.vue'))
const Text = defineAsyncComponent(() => import('../Text.vue'))

function loader(app: App<Element>) {
  app.component('chant-button', Button)
  app.component('chant-field', Field)
  app.component('chant-image', Image)
  app.component('chant-swipe', Swipe)
  app.component('chant-text', Text)
}

export default loader
