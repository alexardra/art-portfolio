<template>
<lazy-component tag="div">
  <video :key="src" controls>
    <source :src="import(`../assets/${src}`)" type="video/mp4">
    Your browser does not support HTML video.
  </video>
</lazy-component>
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
      required: false,
    },
    height: {
      type: Number,
      required: false,
    }
  },
};
</script>

<style scoped>
video, div {
  width: 100%;
  height: 100%;
}
</style>