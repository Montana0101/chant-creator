<template>
  <drag-box :list="state.list"> </drag-box>
</template>

<script lang="ts">
import { reactive } from 'vue'
import DragBox from './components/DragBox.vue'
import ground from './config/ground'

export default {
  name: 'ground',
  components: { DragBox },
  setup() {
    const state = reactive({ list: ground })
    return { state }
  }
}
</script>

<style lang="scss" scoped></style>
