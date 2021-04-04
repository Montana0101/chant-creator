<template>
  <van-field class="field" placeholder="请输入用户名" />
</template>

<script lang="ts">
import { Field } from 'vant'
import 'vant/es/field/style'

export default {
  name: 'chant-field',
  components: {
    [Field.name]: Field
  }
}
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  align-items: center;
}
</style>
