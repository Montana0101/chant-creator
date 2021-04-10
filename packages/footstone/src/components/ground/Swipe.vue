<template>
  <van-swipe
    :autoplay="state.autoplay"
    :loop="state.loop"
    :vertical="state.vertical"
    indicator-color="white"
  >
    <van-swipe-item v-for="item in state.imgList" :key="item.url">
      <chant-image :url="item.imgUrl"> </chant-image>
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { Swipe, SwipeItem } from 'vant'
import 'vant/es/swipe/style'
import 'vant/es/swipe-item/style'

export default {
  name: 'chant-swipe',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props: {
    attr: Object
  },
  setup(props) {
    const attr = props.attr as Record<string, any>
    const state = reactive(attr)

    return { state }
  }
}
</script>

<style lang="scss" scoped></style>
