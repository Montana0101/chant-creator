<template>
  <div class="custom-made">
    <div class="title">属性设置</div>
    <el-form label-width="80px" label-position="left">
      <!-- 样式设置 -->
      <style-setting></style-setting>
    </el-form>
  </div>
</template>

<script lang="ts">
import StyleSetting from './StyleSetting.vue'

export default {
  name: 'custom-made',
  components: { StyleSetting },
  setup() {}
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
