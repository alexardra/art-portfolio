<template>
  <div class="p-20">
    <p class="m-0 text-sm" v-html="description"></p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  description: string
}>()
</script>
