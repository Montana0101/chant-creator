<template>
  <draggable-box :list="list">
    <div v-for="item in list" :key="item.id" class="item">
      组件{{ item.id }}
    </div>
  </draggable-box>
</template>

<script lang="ts">
import { reactive } from 'vue'
import DraggableBox from './components/DraggableBox.vue'

export default {
  name: 'me',
  components: { DraggableBox },
  setup() {
    const list: any[] = reactive([])
    for (let i = 0; i < 4; i++) {
      list.push({ name: i, id: i })
    }
    return { list }
  }
}
</script>

<style lang="scss" scoped></style>
