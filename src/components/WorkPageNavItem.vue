<template>
  <Link
    :to="`/work/${id}`"
    class="block min-h-[350px] w-100"
  >
    <figure
      class="block min-h-[350px] w-100 m-0 p-4 relative"
    >
      <div class="flex justify-items-center h-full w-full">
        <img
          class="h-full w-auto"
          alt="Work thumbnail"
          :src="imageUrl"
        />
      </div>
      <figcaption class="absolute bottom-4 m-0 p-0">
        {{ thumbnail }}
      </figcaption>
    </figure>
  </Link>
</template>

<script setup lang="ts">
import Link from './Link.vue'
import { useImage } from '@/composables/useImage'

const props = defineProps<{
  id: number
  preview: string
  thumbnail?: string
}>()

const imageUrl = useImage(
  `/src/assets/previews/${props.preview}`
)
</script>
