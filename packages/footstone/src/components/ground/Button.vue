<template>
  <div class="chant-button">
    <van-button v-bind="$attrs" type="primary">主要按钮</van-button>
  </div>
</template>

<script lang="ts">
import { Button } from 'vant'
import 'vant/es/button/style'

export default {
  name: 'chant-button',
  inheritAttrs: false,
  components: {
    [Button.name]: Button
  }
}
</script>

<style lang="scss" scoped>
.chant-button {
  text-align: center;
}
</style>
