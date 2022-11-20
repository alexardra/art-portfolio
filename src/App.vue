<template>
<PageWrapper
  :mode="mode"
>
  <MainNavbar />
  <router-view></router-view>
  <MainFooter 
    v-if="showFooter"
  />
</PageWrapper>
</template>

<script>
import PageWrapper from './components/PageWrapper.vue'
import MainNavbar from './components/MainNavbar.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    PageWrapper,
    MainNavbar,
    MainFooter,
  },
  computed: {
    mode() {
      return this.$route.name === 'MainPage' ? 'dark' : 'light'
    },
    showFooter() {
      return this.$route.fullPath.startsWith('/work')
    },
  }
}
</script>

<style>
body {
  width: 100%;
  height: 100vh;
  overflow:hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100%;
  height:100%;
}
</style>
