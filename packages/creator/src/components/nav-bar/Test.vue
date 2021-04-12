<template>
  <el-dialog
    v-model="state.visible"
    :title="state.title"
    @open="onOpen"
    @close="onClose"
  >
    <el-form label-width="80px" label-position="left">
      <el-form-item label="模版名称1:">
        <el-input v-model="state.title"></el-input>
      </el-form-item>
      <el-form-item label="模版分类1:">
        <el-input v-model="state.describe"></el-input>
      </el-form-item>
      <el-form-item label="封面设置1:">
        <div>封面</div>
      </el-form-item>
    </el-form>
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
