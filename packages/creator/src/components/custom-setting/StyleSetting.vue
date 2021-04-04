<template>
  <template v-for="(val, key) of currentStyle" :key="key">
    <el-form-item v-if="attarToName(key)" :label="attarToName(key)">
      <el-input v-model="currentStyle[key]"></el-input>
    </el-form-item>
  </template>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { AnyObject } from '@/type'

export default {
  name: 'style-setting',
  setup() {
    const store = useStore()
    const currentStyle = computed(() => store.state.editor.current.style)
    // 样式属性转为汉字
    function attarToName(key: string | number) {
      const map: AnyObject = {
        fontSize: '文字大小',
        fontWeight: '文字粗细',
        height: '高度',
        width: '宽度'
      }
      return map[key]
    }

    return { currentStyle, attarToName }
  }
}
</script>

<style lang="scss" scoped></style>
