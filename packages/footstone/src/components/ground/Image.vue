<template>
  <van-image :src="url" fit="cover" width="100%" />
</template>

<script langt="ts">
import { computed } from 'vue'
import { Image } from 'vant'
import 'vant/es/image/style'

export default {
  name: 'chant-image',
  props: {
    url: String
  },
  components: {
    [Image.name]: Image
  },
  setup(props) {
    const url = computed(() => props.url)
    return { url }
  }
}
</script>

<style lang="scss" scoped></style>
