<template>
  <el-upload
    action="."
    :auto-upload="false"
    :show-file-list="false"
    @change="onChange"
    class="thorn-upload"
  >
    <thorn-image v-if="url" :src="url" class="img" />
    <i v-else class="el-icon-plus"></i>
  </el-upload>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'thorn-upload',
  props: {
    url: String
  },
  emits: ['change'],
  setup(props, context) {
    const url = computed(() => props.url)
    // 文件状态改变
    function onChange(row: Record<string, any>) {
      context.emit('change', row)
    }

    return { url, onChange }
  }
}
</script>

<style lang="scss">
.thorn-upload {
  .el-upload {
    @include flex-center;
    border: 1px dashed $alto;
    border-radius: 6px;
    cursor: pointer;
    height: 120px;
    width: 120px;
    &:hover {
      border-color: $dodger-blue;
      color: $dodger-blue;
    }
  }
  .el-icon-plus {
    font-size: 28px;
  }
  .img {
    width: 120px;
    height: 120px;
  }
}
</style>
