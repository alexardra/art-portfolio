<template>
  <div class="tile-container">
    <img
      @click="showFullscreen"
      :src="require(`../assets/${src}`)"
      :alt="src"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
    tileIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    showFullscreen() {
      this.$root.showModal(this.content, this.tileIndex);
    },
  },
};
</script>

<style scoped>
.tile-container,
.tile-container img {
  width: 100%;
  height: 100%;
}
</style>