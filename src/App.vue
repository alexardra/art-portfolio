<template>
<div class="content" :class="`${mode}-bg`">
  <MainNavbar/>
  <!-- <MainSection
    v-if="isWorkPage"
  /> -->
  <WorkPage 
    v-if="isWorkPage"
  />
  <MainFooter />
</div>
</template>

<script>
import MainNavbar from './components/MainNavbar.vue'
import WorkPage from '@/views/WorkPage.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainNavbar,
    WorkPage,
    MainFooter,
  },
  computed: {
    mode() {
      return this.$route.name === 'Main' ? 'dark' : 'light'
    },
    isWorkPage() {
      return this.$route.name === 'Work' // TODO: clean up routes 
    }
  }
}
</script>

<style>
body {
  width: 100%;
  height: 100vh;
  overflow:hidden;
}

.content {
  width: 100%;
  height:100%;
}

.light-bg {
  background-color: #F6F5EC !important;
}

.dark-bg {
  background-image: url('@/assets/background-dark.svg')
}

#app {
  font-family: "ClashDisplay-Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100%;
  height:100%;
}
</style>
