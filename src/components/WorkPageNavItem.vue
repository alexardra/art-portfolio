<template>
  <Link :to="`/work/${id}`">
    <figure>
      <div class="flex justify-items-center h-100 w-100">
        <img
          class="h-100 w-auto"
          :src="imageUrl"
          :alt="`View work - ${preview}`"
        />
      </div>
      <figcaption>{{ thumbnail }}</figcaption>
    </figure>
  </Link>
</template>

<script setup lang="ts">
import Link from './Link.vue'
import { useImage } from '@/composables/useImage'

const props = defineProps<{
  id: number
  url: string
  preview?: string
  thumbnail?: string
}>()

const imageUrl = useImage(
  `/src/assets/previews/${props.url}`
)
</script>

<style scoped>
figure {
  margin: 0;
  height: 100%;
  padding: 20px;
  position: relative;
}

figcaption {
  position: absolute;
  bottom: 20px;
  margin: 0;
  padding: 0;
}
</style>
