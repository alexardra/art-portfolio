<template>
<iframe 
  frameborder="0" 
  allow="autoplay; fullscreen; picture-in-picture" 
  allowfullscreen
  :src="src" 
  :width="width" 
  :height="height"
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
    width: {
      type: Number,
      default: 640, // change this to full size
    },
    height: {
      type: Number,
      default: 360, // change this to full size too
    }
  }
}
</script>