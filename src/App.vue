<template>
  <MainNavbar />
  <p>
    This will be the coolest portfolio in the future!!!
  </p>
  <img src="./assets/gif.png"/>
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
body {
  background-color:black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color:black;
}

p {
  margin-top: 50px;
}

img {
  margin-top: 40px;
  width: 400px;
  height: 400px;
}
</style>
