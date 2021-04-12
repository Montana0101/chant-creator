<template>
  <thorn-dialog
    title="保存模版"
    width="450px"
    @next="onSave"
    @open="onOpen"
    @close="onClose"
  >
    <el-form label-width="80px" label-position="left">
      <el-form-item label="模版名称:">
        <el-input v-model="state.form.title"></el-input>
      </el-form-item>
      <el-form-item label="模版分类:">
        <el-input v-model="state.form.describe"></el-input>
      </el-form-item>
      <el-form-item label="封面设置:">
        <div>封面</div>
      </el-form-item>
    </el-form>
  </thorn-dialog>
</template>

<script lang="ts">
import { reactive, toRaw } from 'vue'
import { useStore } from 'vuex'
import shiki from '@chant/common/api/shiki'

export default {
  name: 'template-save',
  props: {
    row: Object
  },
  setup(props, context) {
    const store = useStore()
    // 表单
    const state = reactive({
      form: {}
    })
    // 保存
    async function onSave() {
      const componentList = store.state.editor.componentList
      const params = toRaw(componentList)
      const ret = await shiki.postCode('template/save', params)
      console.log(ret)
    }
    // 打开
    function onOpen() {
      state.form = { ...props.row }
    }
    // 关闭
    function onClose() {
      context.emit('update:modelValue', false)
    }

    return { state, onSave, onOpen, onClose }
  }
}
</script>

<style lang="scss" scoped></style>
