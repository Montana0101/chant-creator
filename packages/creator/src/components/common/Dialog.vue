<template>
  <el-dialog v-model="state.visible" :title="state.title">
    <template #footer>
      <div>
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { reactive } from 'vue'
export default {
  name: 'thorn-dialog',
  props: {
    title: String // 标题
  },
  setup(props) {
    const state = reactive({
      visible: false,
      title: props.title
    })

    return { state }
  }
}
</script>

<style lang="scss" scoped></style>
