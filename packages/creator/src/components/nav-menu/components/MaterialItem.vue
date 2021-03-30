<template>
  <div v-for="(item, index) in state.list" :key="index" class="list">
    <div class="cover">封面</div>
    <div class="bottom">{{ item.label }}组件</div>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'

export default {
  name: 'material-item',
  props: {
    list: Array
  },
  setup(props) {
    const state = reactive({
      list: props.list as any[]
    })

    return { state }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variable.scss';
@import '@/style/mixin.scss';

.list {
  border: 2px solid $athens-gray;
  cursor: move;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95px;
  width: 95px;
  &:hover {
    border-color: $dodger-blue;
  }
  &:nth-child(n + 3) {
    margin-top: 10px;
  }
  .cover {
    @include flex-center;
    flex: 1;
  }
  .bottom {
    background-color: $athens-gray;
    font-size: 14px;
    padding: 3px 0;
    text-align: center;
  }
}
</style>
