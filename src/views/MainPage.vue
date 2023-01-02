<template>
<div
  class="main align-items-center justify-center"
>
  <img
    id="title"
    src="@/assets/main-page.png"
  />
  <div id="overlay" :style="`width: ${width}px; height: ${height}px; z-index: 100`"></div>
  <img
    class="cover"
    src="@/assets/main-page-stars.png"
  />
</div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      debounce: false,
      width: 0,
      height: 0,
    }
  },
  mounted() {
    this.width = (3485 * window.innerWidth) / 5758
    this.height = (1012 * window.innerHeight) / 3150 - 60
    // console.log(window.innerWidth, window.innerHeight)
  },

}
</script>

<style scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
}

#title {
  position: absolute;
  top: -60px;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.cover {
  display: none;
  position: absolute;
  top: -60px;
  left: 0;
  width: 100vw;
  height: 100vh;
}

#overlay:hover + .cover {
  display: block;
}
</style>