<template>
  <thorn-dialog title="图片编辑" width="450px" @next="onNext" @close="onClose">
    <el-form label-width="80px" label-position="left">
      <el-form-item label="标题:">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="跳转链接:">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
    </el-form>
  </thorn-dialog>
</template>

<script lang="ts">
import { reactive } from 'vue'

export default {
  name: 'img-edit',
  setup(props, context) {
    // 表单
    const form = reactive({})
    // 确定
    function onNext() {}
    // 关闭
    function onClose() {
      context.emit('update:modelValue', false)
    }

    return { form, onNext, onClose }
  }
}
</script>

<style lang="scss" scoped></style>
