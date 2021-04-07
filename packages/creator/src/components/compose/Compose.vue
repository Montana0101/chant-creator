<template>
  <div class="compose">
    <draggable
      :list="state.list"
      @change="onChange"
      v-bind="{ animation: 200 }"
      item-key="id"
      group="drag-compose"
      class="container"
    >
      <template #item="{ element, index }">
        <div
          @click="setCurrentIndex(index)"
          :style="{ display: element.style.display }"
          :class="{ active: state.currentIndex === index }"
          class="shell"
        >
          <component
            :is="element.component"
            :style="getStyle(element.style)"
            :attr="element.attr"
          />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts">
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import styleFit from '@/utils/style-fit'

type Nest = {
  element: object
  newIndex: number
}

type Row = {
  added: Nest
  moved: Nest
}

export default {
  name: 'compose',
  setup() {
    const store = useStore()
    const state = reactive({
      list: computed(() => store.state.editor.componentList),
      currentIndex: 0
    })
    // drage change
    function onChange(row: Row) {
      // 设置组件列表
      store.commit('editor/setComponentList', state.list)
      // 类型
      const { added, moved } = row
      // 新增
      if (added) {
        setCurrentIndex(added.newIndex)
      }
      // 移动
      if (moved) {
        setCurrentIndex(moved.newIndex)
      }
    }
    // 设置当前index
    function setCurrentIndex(index: number) {
      state.currentIndex = index
      store.commit('editor/setCurrent', state.list[index])
    }
    // 获取样式
    function getStyle(style: object) {
      return styleFit.toPx(style)
    }

    return { state, onChange, setCurrentIndex, getStyle }
  }
}
</script>

<style lang="scss" scoped>
.compose {
  @include hide-scroll;

  background-color: $alabaster;
  display: flex;
  justify-content: center;
  flex: 1;
  .container {
    @include hide-scroll;

    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    height: 667px;
    margin: 50px 0;
    width: 375px;

    .shell {
      cursor: move;
      &:hover {
        border: 2px solid $dodger-blue;
      }
      &.active {
        border: 2px solid $dodger-blue;
      }
      > :first-of-type {
        pointer-events: none;
      }
    }
  }
}
</style>
