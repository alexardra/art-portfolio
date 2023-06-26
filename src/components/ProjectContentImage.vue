<template>
  <div class="tile-container" :style="styles">
    <img @click="showFullscreen" :src="import(`../assets/${src}`)" :alt="src" />
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
    width: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
  },
  computed: {
    styles() {
      return `max-width: ${this.width}px; max-height: ${this.height}px; margin: auto;`;
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
