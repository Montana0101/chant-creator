<template>
  <!-- header -->
  <nav-bar></nav-bar>
  <!-- body -->
  <div class="editor-body">
    <!-- 菜单 -->
    <nav-menu></nav-menu>
    <!-- 画布 -->
    <compose></compose>
    <!-- 自定义属性 -->
    <custom-made></custom-made>
  </div>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue'
import NavMenu from '@/components/nav-menu/NavMenu.vue'
import Compose from './components/compose/Compose.vue'
import CustomMade from '@/components/custom-made/CustomMade.vue'

export default {
  components: { NavBar, NavMenu, Compose, CustomMade },
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.editor-body {
  display: flex;
  height: calc(100vh - 64px);
}
</style>
