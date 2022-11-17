<template>
<div class="outer-p d-flex justify-between">
  <div 
    class="d-flex align-items-end"
  >
    <router-link to="/" class="h-logo">
      <img
        class="w-logo h-logo"
        src="@/assets/logo-dark.svg" 
        alt="Logo"
      />
    </router-link>
    <MainNavbarItem 
      v-for="item in navbarItems"
      :key="item.id"
      :title="item.title"
      :to="item.to"
    />
  </div>
  <MainNavbarItem 
    title="Contact"
    to="/contact"
  />  
</div>
</template>

<script>
import MainNavbarItem from './MainNavbarItem.vue';

export default {
  components: {
    MainNavbarItem,
  },
  computed: {
    navbarItems() {
      return [
        {
          title: 'Work',
          to: '/work',
        },
        {
          title: 'Me',
          to: '/about',
        },
        {
          title: 'Starsheep',
          to: '/starsheep',
        },                      
      ]
    },
    logoUrl() {
      return this.$root.mode === 'light' ? '@/assets/logo-dark.svg' : '@/assets/logo-light.svg'
    }
  }
}
</script>