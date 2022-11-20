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
  // mounted() {
  //   window.addEventListener('mouseover', (e) => {
  //     console.log(e.target.id)

  //     if (e.target.id === 'title') {
  //       this.onMouseDown()
  //     } else {
  //       this.onMouseLeave()
  //     }

  //   }, false);
  // },
  // methods: {
  //   onMouseDown() {
  //     this.active = true
  //     console.log('onMouseDown')
  //   },
  //   onMouseLeave() {
  //     console.log('onMouseLeave')

  //     if (this.active) {
  //       setTimeout(() => {
  //         this.active = false
  //       }, 700)
  //     }
  //   },
  // },
}
</script>

<style scoped>
.main {
  position: relative;
  height: calc(100vh - 60px);
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>