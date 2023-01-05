<template>
  <iframe
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    :src="src"
  >
  </iframe>
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
iframe {
  width: 100%;
  height: 100%;
}
</style>