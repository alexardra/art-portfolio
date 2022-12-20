<template>
<div
  :style="`width: ${width}px; height: ${height}px;`"
>
  <img
    @click="showFullscreen"
    :src="require(`../assets/${src}`)"
    :width="width"
    :height="height"
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
    width: {
      type: Number,
      default: 640, // change this to full size
    },
    height: {
      type: Number,
      default: 360, // change this to full size too
    },
    content: {
      type: Array,
      required: true,
    },
    tileIndex: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    showFullscreen() {
      this.$root.showModal(this.content, this.tileIndex)
    },
  }
}
</script>