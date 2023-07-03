<template>
  <component :is="pageWrapperComponent">
    <template #default>
      <slot></slot>
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import type { Theme } from '@/types'

const props = defineProps<{
  theme: Theme
}>()

const pageWrapperComponent = computed(() => {
  return {
    light: defineAsyncComponent(
      () => import('./PageWrapperLight.vue')
    ),
    dark: defineAsyncComponent(
      () => import('./PageWrapperDark.vue')
    ),
  }[props.theme]
})
</script>
