<template>
  <van-swipe class="chant-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { Swipe, SwipeItem } from 'vant'
import 'vant/es/swipe/style'
import 'vant/es/swipe-item/style'

export default {
  name: 'chant-swipe',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  setup() {
    function onSwiper(swiper: any) {
      console.log(swiper)
    }
    function onSlideChange() {
      console.log('slide change')
    }
    return { onSwiper, onSlideChange }
  }
}
</script>

<style lang="scss" scoped></style>
