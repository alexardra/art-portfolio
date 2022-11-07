<template>
<section class="main p-3">
  <ContentTile 
    v-for="i in tiles"
    :key="`tile-${i}`"
    class="container"
    :left="i % columns === 1"
    :right="i % columns === 0"
    :top="i <= columns"
    :bottom="i > tiles - columns"
  />
</section>
</template>

<script>
import ContentTile from './ContentTile.vue'

export default {
  components: {
    ContentTile,
  },
  props: {
    columns: {
      type: Number,
      default: 4,
    },
    rows: {
      type: Number,
      default: 2,
    }
  },
  computed: {
    tiles() {
      return this.columns * this.rows
    },
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