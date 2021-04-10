<template>
  <div class="nav-bar">
    <el-button @click="onSave" type="primary" size="small">保存模版</el-button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'nav-bar',
  setup() {
    // 保存
    function onSave() {}

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
