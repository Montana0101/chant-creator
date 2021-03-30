<template>
  <el-tabs tab-position="left">
    <el-tab-pane label="基础">
      <ground></ground>
    </el-tab-pane>
    <el-tab-pane label="媒体">
      <media></media>
    </el-tab-pane>
    <el-tab-pane label="图表">
      <chart></chart>
    </el-tab-pane>
    <el-tab-pane label="商品">
      <goods></goods>
    </el-tab-pane>
    <el-tab-pane label="我的">
      <me></me>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import Ground from './Ground.vue'
import Chart from './Chart.vue'
import Media from './Media.vue'
import Goods from './Goods.vue'
import Me from './Me.vue'

export default {
  name: 'nav-menu',
  components: { Ground, Chart, Media, Goods, Me },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
