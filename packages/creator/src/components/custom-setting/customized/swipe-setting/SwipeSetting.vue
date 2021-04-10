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
  <el-form-item label="图片列表">
    <drag-handle
      :list="currentAttr.imgList"
      @edit="onEdit"
      @delete="onDelete"
      @add="onAdd"
    >
    </drag-handle>
  </el-form-item>
  <!-- 图片编辑 -->
  <img-edit v-model="state.imgEditVisible"> </img-edit>
</template>

<script lang="ts">
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import DragHandle from '@/components/drag/DragHandle.vue'
import ImgEdit from './ImgEdit.vue'

export default {
  name: 'swipe-setting',
  components: { DragHandle, ImgEdit },
  setup() {
    const store = useStore()
    // state
    const state = reactive({
      imgEditVisible: false
    })
    // current
    const current = store.state.editor.current
    const currentAttr = computed(() => current.attr)

    // 图片编辑
    function onEdit() {
      state.imgEditVisible = true
    }
    // 图片删除
    function onDelete() {}
    // 图片新增
    function onAdd() {}

    return { state, currentAttr, onEdit, onDelete, onAdd }
  }
}
</script>

<style lang="scss" scoped></style>
