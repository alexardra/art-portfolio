<template>
<div class="outer-p d-flex justify-between">
  <div 
    class="d-flex align-items-end"
  >
    <router-link to="/" class="h-logo">
      <Suspense>
        <component 
          :is="logoComponent"
        />
        <template #fallback>
          <LogoFallback />
        </template>
      </Suspense>
    </router-link>
    <MainNavbarItem 
      v-for="item in navbarItems"
      :key="item.id"
      :title="item.title"
      :to="item.to"
    />
  </div>
  <MailContactItem />
</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import MainNavbarItem from './MainNavbarItem.vue'
import MailContactItem from './MailContactItem.vue'
import LogoFallback from './images/LogoFallback.vue'

export default {
  components: {
    MainNavbarItem,
    MailContactItem,
    LogoFallback,
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
    logoComponent() {
      return {
        'light': defineAsyncComponent(
          () => import('./images/LogoDark.vue'),
        ),
        'dark': defineAsyncComponent(
          () => import('./images/LogoLight.vue'),
        ),
      }[this.$root.mode]
    },
  }
}
</script>