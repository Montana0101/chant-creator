<template>
  <draggable-box :list="state.list"> </draggable-box>
</template>

<script lang="ts">
import { reactive } from 'vue'
import DraggableBox from './components/DraggableBox.vue'
import ground from './config/ground'

export default {
  name: 'ground',
  components: { DraggableBox },
  setup() {
    const state = reactive({ list: ground })
    return { state }
  }
}
</script>

<style lang="scss" scoped></style>
