<template>
  <draggable
    :list="state.list"
    :group="state.group"
    :sort="false"
    item-key="name"
    class="menu-draggable"
  >
    <template #item="{ element }">
      <material-item :row="element"> </material-item>
    </template>
  </draggable>
</template>

<script lang="ts">
import { reactive } from 'vue'
import MaterialItem from './MaterialItem.vue'
import { NavMenuConfig } from '@/type'

export default {
  name: 'draggable-box',
  components: { MaterialItem },
  props: {
    list: Array
  },
  setup(props) {
    const state = reactive({
      list: props.list as unknown[],
      group: { name: 'drag-compose', pull: 'clone', put: false }
    })

    return { state }
  }
}
</script>

<style lang="scss" scoped>
.menu-draggable {
  @include scroll-beautify;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  width: 220px;
}
</style>
