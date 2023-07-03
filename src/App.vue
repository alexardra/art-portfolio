<template>
  <PageWrapper :theme="theme">
    <div class="w-100 h-100">
      <MainNavbar />
      <router-view></router-view>
    </div>
  </PageWrapper>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'

import PageWrapper from './components/PageWrapper.vue'
import MainNavbar from './components/MainNavbar.vue'

const theme = useTheme()
console.log(theme)
</script>

<style>
body {
  width: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
