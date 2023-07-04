<template>
  <img :src="imageUrl" class="w-100" alt="Project work" />
</template>

<script setup lang="ts">
import { useImage } from '@/composables/useImage'

const props = defineProps<{
  src: string
}>()

const imageUrl = useImage(`/src/assets/${props.src}`)
</script>
