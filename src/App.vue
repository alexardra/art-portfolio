<template>
  <PageWrapper :theme="theme">
    <div
      class="w-full h-full my-0 mx-auto max-w-screen-3xl"
    >
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
</script>
