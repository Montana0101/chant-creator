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
  <img-edit
    v-model="state.imgEditVisible"
    v-model:row="currentAttr.imgList[state.imgEditIndex]"
  >
  </img-edit>
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
      imgEditIndex: 0,
      imgEditVisible: false
    })
    // current
    const currentAttr = computed(() => store.state.editor.current.attr)

    // 图片编辑
    function onEdit(index: number) {
      state.imgEditIndex = index
      state.imgEditVisible = true
    }
    // 图片删除
    function onDelete(index: number) {
      currentAttr.value.imgList.splice(index, 1)
    }
    // 图片新增
    function onAdd() {
      const row = {
        title: '标题',
        describe: '描述',
        url: '',
        imgUrl: ''
      }
      currentAttr.value.imgList.push(row)
    }

    return { state, currentAttr, onEdit, onDelete, onAdd }
  }
}
</script>

<style lang="scss" scoped></style>
