<template>
<Suspense>
  <div class="content" :style="style">
    <slot></slot>
  </div>
  <template #fallback>
    <div class="content bg-fallback">
      <slot></slot>
    </div>
  </template>  
</Suspense>
</template>

<script>
export default {
  computed: {
    imageUrl() {
      return `${window.location.origin}/background-dark.svg`
    },
    style() {
      return `background-image: url(${this.imageUrl})`
    },
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
}

.bg-fallback {
  background-color: #2d2d2c;
}

/* .bg {
  background-image: url('~/background-dark.svg')
} */
</style>