<template>
  <MainNavbar />
</template>

<script>
import MainNavbar from '@/components/MainNavbar.vue'
export default {
  name: 'App',
  components: {
    MainNavbar
  }
}
</script>

<style scoped>
body {
  background-image: url('@/assets/background-dark.svg')
}
</style>