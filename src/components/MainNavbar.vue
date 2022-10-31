<template>
<div class="p-2">
  <SideBySide
    align="center"
    justify="between"
    width="100%"
  >
    <SideBySide
      align="center"
      spacing="large"
    >
      <img class="px-2" src="@/assets/logo-light.svg" alt="Logo"/>
      <button class="p-2 pb-0">
        <router-link to="/">Work</router-link>
      </button>
      <button class="p-2 pb-0">
        <router-link to="/about">Me</router-link>
      </button>
      <button class="p-2 pb-0">
        <router-link to="/starsheep">Starsheep</router-link>
      </button>
    </SideBySide>
    <button class="p-2 pb-0">
      <router-link to="/contact">Contact</router-link>
    </button>
  </SideBySide>
</div>
</template>

<script>
import SideBySide from '@/core/arrangements/SideBySide.vue'

export default {
  components: {
    SideBySide,
  },
}
</script>

<style scoped>
button {
  background: transparent;
  color: #F6F5EC;
  border: none;
}

button a {
  color: inherit;
  text-decoration: none;
}
</style>