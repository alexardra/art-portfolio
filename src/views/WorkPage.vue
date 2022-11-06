<template>
  <MainSection />
  <MainFooter />
</template>

<script>
import MainSection from '@/components/MainSection.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  components: {
    MainSection,
    MainFooter,
  },
  created() {
    console.log('work page')
  }
}
</script>
