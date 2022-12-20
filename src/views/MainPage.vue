<template>
<div
  class="main align-items-center justify-center"
>
  <img
    id="title"
    src="@/assets/main-page.png"
  />
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
    }
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

#title:hover + .cover {
  display: block;
}
</style>