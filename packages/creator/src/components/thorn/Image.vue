<template>
  <el-image :src="url"></el-image>
</template>

<script lang="ts">
export default {
  name: 'thorn-image',
  props: {
    url: String
  },
  setup(props) {
    return { url: props.url }
  }
}
</script>

<style lang="scss" scoped></style>
