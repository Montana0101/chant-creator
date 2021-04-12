<template>
  <div class="nav-bar">
    <el-button @click="onSave" type="primary" size="small">保存模版</el-button>
  </div>
</template>

<script lang="ts">
import { toRaw } from 'vue'
import { useStore } from 'vuex'
import shiki from '@chant/common/api/shiki'

export default {
  name: 'nav-bar',
  setup() {
    const store = useStore()
    // 保存
    async function onSave() {
      const componentList = store.state.editor.componentList
      const params = toRaw(componentList)
      const ret = await shiki.postCode('template/save', params)
      console.log(ret)
    }

    return { onSave }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  position: relative;
}
</style>
