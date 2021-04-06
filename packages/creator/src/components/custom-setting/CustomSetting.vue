<template>
  <div class="custom-made">
    <div class="title">属性设置</div>
    <el-form label-width="110px" label-position="left">
      <!-- 轮播图设置 -->
      <swipe-setting v-if="current.component === 'chant-swipe'">
      </swipe-setting>
      <!-- 属性设置 -->
      <attr-setting></attr-setting>
      <!-- 样式设置 -->
      <style-setting></style-setting>
    </el-form>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef } from 'vue'
import { useStore } from 'vuex'
import { NavMenuConfig } from '@/type'
import loader from './util/loader'

export default {
  name: 'custom-setting',
  components: loader,
  setup() {
    const store = useStore()
    // 当前编辑的组件信息
    const current: ComputedRef<NavMenuConfig> = computed(
      () => store.state.editor.current
    )

    return { current }
  }
}
</script>

<style lang="scss" scoped>
.custom-made {
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  position: relative;
  width: 300px;
  .title {
    font-size: 18px;
    padding-bottom: 20px;
  }
}
</style>
