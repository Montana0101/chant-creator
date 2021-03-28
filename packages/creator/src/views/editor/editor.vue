<template>
  <!-- header -->
  <nav-bar></nav-bar>
  <!-- body -->
  <div class="editor-body">
    <!-- 菜单 -->
    <nav-menu></nav-menu>
    <!-- 画布 -->
    <compose></compose>
    <!-- 属性设置 -->
    <attr-setting></attr-setting>
  </div>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue'
import NavMenu from './components/nav-menu/NavMenu.vue'
import Compose from './components/compose/Compose.vue'
import AttrSetting from './components/attr-setting/AttrSetting.vue'

export default {
  components: { NavBar, NavMenu, Compose, AttrSetting },
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
