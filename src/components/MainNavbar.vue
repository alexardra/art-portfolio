<template>
<div class="px-2 py-3">
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
    }
  }
}
</script>
