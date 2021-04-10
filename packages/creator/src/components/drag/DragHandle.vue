<template>
  <div class="drag-handle">
    <draggable
      :list="list"
      handle=".handle"
      v-bind="{ animation: 200 }"
      item-key="url"
    >
      <template #item="{ element, index }">
        <div class="item">
          <div class="title ellipsis-1">{{ element.title }}</div>
          <div class="describe ellipsis-1">{{ element.describe }}</div>
          <!-- 鼠标悬浮显示的功能菜单 -->
          <div class="menu vertically">
            <i @click="onEdit(index)" class="el-icon-edit"></i>
            <i @click="onDelete(index)" class="el-icon-delete"></i>
            <i class="el-icon-rank handle"></i>
          </div>
        </div>
      </template>
    </draggable>
    <div class="p-5 t-a-c">
      <el-button @click="onAdd" type="primary" size="mini" class="btn"
        >添加
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'drag-handle',
  props: {
    list: Array
  },
  emits: ['edit', 'delete', 'add'],
  setup(props, context) {
    const list = computed(() => props.list)
    // 编辑
    function onEdit(index: number) {
      context.emit('edit', index)
    }
    // 删除
    function onDelete() {
      context.emit('delete')
    }
    // 新增
    function onAdd() {
      context.emit('add')
    }

    return { list, onEdit, onDelete, onAdd }
  }
}
</script>

<style lang="scss" scoped>
.drag-handle {
  border: 1px solid $mischka;
  .item {
    background-color: $white;
    border-bottom: 1px solid $mischka;
    padding: 7px 5px;
    position: relative;
    text-align: right;
    &:hover {
      .menu {
        display: block;
      }
    }
    .title {
      font-size: 14px;
      font-weight: bold;
    }
    .describe {
      color: $shuttle-gray;
      font-size: 12px;
      padding-top: 5px;
    }
    // 鼠标悬浮显示的功能菜单
    .menu {
      background-color: $white;
      box-shadow: -10px -3px 5px $white;
      display: none;
      right: 5px;
      padding: 7px;
      i {
        cursor: pointer;
        &.handle {
          cursor: move;
        }
      }
      i + i {
        margin-left: 15px;
      }
    }
  }
  .btn {
    width: 100%;
  }
}
</style>
