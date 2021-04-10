<template>
  <component
    v-for="item in componentList"
    :key="item.id"
    :is="item.component"
    :style="getStyle(item.style)"
    :attr="item.attr"
  />
</template>

<script lang="ts">
import { styleFit } from '@chant/common/utils'

export default {
  setup() {
    const componentList: any[] = []
    // 获取样式
    function getStyle(style: object) {
      return styleFit.toPx(style)
    }

    return { componentList, getStyle }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  line-height: 1;
  margin: 0;
  padding: 0;
}
</style>
