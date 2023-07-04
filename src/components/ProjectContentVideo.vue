<template>
  <video :key="src" controls class="w-100 h-100">
    <source :src="url" type="video/mp4" />
    Your browser does not support HTML video.
  </video>
</template>

<script setup lang="ts">
import { useImage } from '@/composables/useImage'

const props = defineProps<{
  src: string
}>()

const url = useImage(`/src/assets/${props.src}`)
</script>
