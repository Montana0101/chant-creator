import { defineAsyncComponent } from 'vue'

const AttrSetting = defineAsyncComponent(() => import('../AttrSetting.vue'))
const StyleSetting = defineAsyncComponent(() => import('../StyleSetting.vue'))
const SwipeSetting = defineAsyncComponent(
  () => import('../customized/SwipeSetting.vue')
)

export default {
  AttrSetting,
  StyleSetting,
  SwipeSetting
}
