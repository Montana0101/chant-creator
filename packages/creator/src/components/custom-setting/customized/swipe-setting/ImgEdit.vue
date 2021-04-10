<template>
  <thorn-dialog
    title="图片编辑"
    width="450px"
    @next="onNext"
    @open="onOpen"
    @close="onClose"
  >
    <el-form label-width="80px" label-position="left">
      <el-form-item label="标题:">
        <el-input v-model="state.form.title"></el-input>
      </el-form-item>
      <el-form-item label="描述:">
        <el-input v-model="state.form.describe"></el-input>
      </el-form-item>
      <el-form-item label="跳转链接:">
        <el-input v-model="state.form.url"></el-input>
      </el-form-item>
      <el-form-item label="上传图片:">
        <thorn-upload :url="state.form.imgUrl" @change="onChange">
        </thorn-upload>
      </el-form-item>
    </el-form>
  </thorn-dialog>
</template>

<script lang="ts">
import { reactive } from 'vue'

type Row = {
  title: string
  describe: string
  url: string
  imgUrl: string
}

export default {
  name: 'img-edit',
  props: {
    row: Object
  },
  setup(props, context) {
    // 表单
    const state = reactive({
      form: { ...props.row } as Row
    })
    // 确定
    function onNext() {
      context.emit('update:row', state.form)
      // 关闭
      onClose()
    }
    // 图片文件变化
    function onChange(row: Record<string, any>) {
      const url = URL.createObjectURL(row.raw)
      state.form.imgUrl = url
    }
    // 打开
    function onOpen() {
      state.form = { ...props.row } as Row
    }
    // 关闭
    function onClose() {
      context.emit('update:modelValue', false)
    }

    return { state, onNext, onChange, onOpen, onClose }
  }
}
</script>

<style lang="scss" scoped></style>
