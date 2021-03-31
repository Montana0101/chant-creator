<template>
  <el-form-item
    v-for="(val, key) of current.style"
    :key="key"
    :label="attarToName(key)"
  >
    <el-input v-model="current.style[key]"></el-input>
  </el-form-item>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { AnyObject } from '@/type'

export default {
  name: 'style-setting',
  setup() {
    const store = useStore()
    const current = computed(() => store.state.editor.current)
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

    return { current, attarToName }
  }
}
</script>

<style lang="scss" scoped></style>
