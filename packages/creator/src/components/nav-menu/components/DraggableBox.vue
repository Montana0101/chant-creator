<template>
  <draggable
    :list="state.list"
    :group="state.group"
    :sort="false"
    class="menu-draggable"
  >
    <material-item :list="state.list"> </material-item>
  </draggable>
</template>

<script lang="ts">
import { reactive } from 'vue'
import MaterialItem from './MaterialItem.vue'

export default {
  name: 'draggable-box',
  components: { MaterialItem },
  props: {
    list: Array
  },
  setup(props) {
    const state = reactive({
      list: props.list,
      group: { name: 'chant-drag', pull: 'clone', put: false }
    })

    return { state }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';

.menu-draggable {
  @include scroll-beautify;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  width: 220px;
}
</style>
