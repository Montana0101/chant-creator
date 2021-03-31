<template>
  <div class="t-a-c">
    <van-button v-bind="$attrs" type="primary">主要按钮</van-button>
  </div>
</template>

<script lang="ts">
import { App } from 'vue'
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

<style lang="scss" scoped></style>
