<template>
  <div class="drag-handle">
    <draggable :list="state.list" handle=".handle" item-key="id">
      <template #item="{ element }">
        <div class="item handle">
          <div class="title">{{ element.title }}</div>
          <div class="describe">{{ element.describe }}</div>
        </div>
      </template>
    </draggable>
    <div class="p-5 t-a-c">
      <el-button type="primary" size="mini" class="btn">添加</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'

export default {
  name: 'drag-handle',
  props: {
    list: Array
  },
  setup(props) {
    const state = reactive({
      list: props.list as Record<string, any>[]
    })

    return { state }
  }
}
</script>

<style lang="scss" scoped>
.drag-handle {
  border: 1px solid $mischka;
  .item {
    border-bottom: 1px solid $mischka;
    padding: 5px;
    text-align: right;
    .title {
      font-size: 14px;
      font-weight: bold;
    }
    .describe {
      color: $shuttle-gray;
      font-size: 12px;
      padding-top: 5px;
    }
  }
  .btn {
    width: 100%;
  }
}
</style>
