<template>
  <div class="outer-p">
    <header>
      <ul class="flex">
        <li>
          <component :is="logoComponent" />
        </li>
        <li v-for="item in navbarItems" :key="item.id">
          <MainNavbarItem v-bind="item" />
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useTheme } from '@/composables/useTheme'
import MainNavbarItem from './MainNavbarItem.vue'

const navbarItems = [
  {
    id: '19a8a6d6-e34e-491a-85c9-0853bba2dcf0',
    title: 'Work',
    to: '/work',
    external: false,
    bold: false,
  },
  {
    id: '188ad129-3d97-4e4e-94c2-fae7cbadbf4b',
    title: 'Me',
    to: '/about',
    external: false,
    bold: false,
  },
  {
    id: '92a94f9c-004b-4e72-ba93-2ce28f2605a8',
    title: 'Starsheep',
    to: 'https://www.instagram.com/starsheep2/',
    external: true,
    bold: false,
  },
  {
    id: '99badf61-288d-4cb7-8349-80a5e54b5e48',
    title: 'Contact',
    to: 'mailto:anniebarbakadze@gmail.com',
    external: true,
    bold: true,
  },
]

const theme = useTheme()
const logoComponent = computed(() => {
  return {
    light: defineAsyncComponent(
      () => import('./images/LogoDark.vue')
    ),
    dark: defineAsyncComponent(
      () => import('./images/LogoLight.vue')
    ),
  }[theme.value]
})
</script>

<style scoped>
header {
  position: relative;
  z-index: 1;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}
</style>
