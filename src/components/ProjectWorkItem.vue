<template>
  <component :is="workItemComponent" :src="item.src" />
</template>

<script setup lang="ts">
import type { WorkItem } from '@/types'
import { defineAsyncComponent, computed } from 'vue'

const props = defineProps<{
  item: WorkItem
}>()

const workItemComponent = computed(() => {
  return {
    iframe: defineAsyncComponent(
      () => import('./ProjectContentIframe.vue')
    ),
    image: defineAsyncComponent(
      () => import('./ProjectContentImage.vue')
    ),
    video: defineAsyncComponent(
      () => import('./ProjectContentVideo.vue')
    ),
  }[props.item.type]
})
</script>
