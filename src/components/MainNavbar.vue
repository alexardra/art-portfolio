<template>
<div class="p-3">
  <SideBySide
    align="center"
    justify="between"
    width="100%"
  >
    <SideBySide
      align="center"
      spacing="large"
    >
      <router-link to="/">
        <img 
          v-if="$root.mode === 'light'"
          class="pr-2" 
          src="@/assets/logo-dark.svg" 
          alt="Logo"
        />
        <img 
          v-else
          class="pr-2" 
          src="@/assets/logo-light.svg" 
          alt="Logo"
        />
      </router-link>

      <MainNavbarItem 
        v-for="item in navbarItems"
        :key="item.id"
        :title="item.title"
        :to="item.to"
      />
    </SideBySide>
    <MainNavbarItem 
      title="Contact"
      to="/contact"
    />
  </SideBySide>
</div>
</template>

<script>
import SideBySide from '@/core/arrangements/SideBySide.vue'
import MainNavbarItem from './MainNavbarItem.vue';

export default {
  components: {
    SideBySide,
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
