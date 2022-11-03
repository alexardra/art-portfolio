<template>
  <MainNavbar />
</template>

<script>
import MainNavbar from './components/MainNavbar.vue'
export default {
  name: 'App',
  components: {
    MainNavbar
  }
}
</script>

<style>
html {
  font-family: ".ClashDisplay";
}

body {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/background-dark.svg')
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
