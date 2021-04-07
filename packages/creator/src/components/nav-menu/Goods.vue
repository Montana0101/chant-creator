<template>
  <drag-box :list="list">
    <div v-for="item in list" :key="item.id" class="item">
      组件{{ item.id }}
    </div>
  </drag-box>
</template>

<script lang="ts">
import { reactive } from 'vue'
import DragBox from './components/DragBox.vue'

export default {
  name: 'goods',
  components: { DragBox },
  setup() {
    const list: any[] = reactive([])
    for (let i = 0; i < 7; i++) {
      list.push({ name: i, id: i })
    }
    return { list }
  }
}
</script>

<style lang="scss" scoped></style>
