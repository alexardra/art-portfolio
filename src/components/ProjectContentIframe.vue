<template>
  <lazy-component tag="div">
    <iframe
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      :src="src"
    >
    </iframe>
  </lazy-component>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
div,
iframe {
  width: 100%;
  height: 100%;
}
</style>
