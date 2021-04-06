<template>
  <el-form-item label="是否循环">
    <el-switch
      v-model="currentAttr.loop"
      :active-value="true"
      :inactive-value="false"
    >
    </el-switch>
  </el-form-item>
  <el-form-item label="轮播间隔(毫秒)">
    <el-input v-model="currentAttr.autoplay"></el-input>
  </el-form-item>
  <el-form-item label="方向">
    <el-radio v-model="currentAttr.vertical" :label="false">横向</el-radio>
    <el-radio v-model="currentAttr.vertical" :label="true">纵向</el-radio>
  </el-form-item>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'swipe-setting',
  setup() {
    const store = useStore()
    const currentAttr = computed(() => store.state.editor.current.attr)

    return { currentAttr }
  }
}
</script>

<style lang="scss" scoped></style>
