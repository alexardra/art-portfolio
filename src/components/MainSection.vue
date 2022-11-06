<template>
<section class="main p-3">
  <ContentTile 
    v-for="i in tilesCount"
    :key="`tile-${i}`"
    class="container"
  />
</section>
<MainFooter />
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
import ContentTile from './ContentTile.vue'

export default {
  components: {
    MainFooter,
    ContentTile,
  },
  props: {
    tilesCount: {
      type: Number,
      default: 8,
    }
  },
}
</script>

<style scoped>
.main {
  width: 100%;
  height: calc(100vh - 175px);
  display: flex;
  flex-wrap: wrap;
}
.container {
  flex: 1 0 25%;
  height: 50%;
}
</style>