<template>
  <div>text</div>
</template>

<script langt="ts">
export default {
  name: 'chant-text',
  props: {
    attr: Object
  },
  setup(props) {
    console.log(props.attr)
  }
}
</script>

<style lang="scss" scoped></style>
