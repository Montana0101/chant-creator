<template>
  <van-swipe
    :autoplay="state.autoplay"
    :loop="state.loop"
    :vertical="state.vertical"
    indicator-color="white"
  >
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
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
