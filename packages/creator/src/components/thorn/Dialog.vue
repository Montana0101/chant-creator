<template>
  <el-dialog
    v-model="state.visible"
    :title="state.title"
    destroy-on-close
    @open="onOpen"
    @close="onClose"
  >
    <slot></slot>
    <template #footer>
      <el-button @click="onClose">取 消</el-button>
      <el-button @click="onNext" type="primary">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { reactive } from 'vue'

export default {
  name: 'thorn-dialog',
  props: {
    title: String
  },
  emits: ['open', 'close', 'next'],
  setup(props, context) {
    const state = reactive({
      visible: true,
      title: props.title
    })
    // 打开
    function onOpen() {
      context.emit('open')
    }
    // 关闭
    function onClose() {
      context.emit('close')
    }
    // 确定
    function onNext() {
      context.emit('next')
    }

    return { state, onOpen, onClose, onNext }
  }
}
</script>

<style lang="scss" scoped></style>
