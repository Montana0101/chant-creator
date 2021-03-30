<template>
  <div class="attr-setting">
    <div class="title">属性设置</div>
    <el-form label-width="80px" label-position="left">
      <!-- 专业定制 -->
      <!-- 样式设置 -->
      <el-form-item
        v-for="(val, key) of current.style"
        :key="key"
        :label="styleMap(key)"
      >
        <el-input v-model="current.style[key]"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { AnyObject } from '@/type'

export default {
  name: 'custom-made',
  setup() {
    const store = useStore()
    const current = computed(() => store.state.editor.current)
    // 样式属性转为汉字
    function styleMap(key: string | number) {
      const map: AnyObject = {
        fontSize: '文字大小',
        fontWeight: '文字粗细',
        height: '高度',
        width: '宽度'
      }
      return map[key]
    }

    return { current, styleMap }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variable.scss';

.attr-setting {
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  position: relative;
  width: 300px;
  .title {
    font-size: 18px;
    padding-bottom: 20px;
  }
  .attr-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    .label {
      color: $tundora;
    }
  }
}
</style>
