<template>
  <van-field class="test" placeholder="请输入用户名" />
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
.test {
  display: flex;
  align-items: center;
}
</style>
