<template>
<div
  id="main"
  class="main align-items-center justify-center"
>
  <img
    id="title"
    src="@/assets/main-page-title.svg"
  />
  <img
    class="cover"
    src="@/assets/main-page-stars.svg"
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
  position: relative;
  height: calc(100vh - 60px);
}

#title {
  position: absolute;
  top: calc(50% - 210px);
}

.cover {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#title:hover + .cover {
  display: block;
}
</style>