<template>
  <MainNavbar />
  <MainFooter />
</template>

<script>
import MainNavbar from '@/components/MainNavbar.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainNavbar,
    MainFooter,
  }
}
</script>