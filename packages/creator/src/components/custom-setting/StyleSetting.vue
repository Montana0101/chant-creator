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

export default {
  name: 'style-setting',
  setup() {
    const store = useStore()
    const currentStyle = computed(() => store.state.editor.current.style)
    // 样式属性转为汉字
    function attarToName(key: string | number) {
      const map: Record<string, string> = {
        borderRadius: '圆角',
        fontSize: '文字大小',
        fontWeight: '文字粗细',
        height: '高度',
        margin: '外边距',
        padding: '内边距',
        width: '宽度'
      }
      return map[key]
    }

    return { currentStyle, attarToName }
  }
}
</script>

<style lang="scss" scoped></style>
