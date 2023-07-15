<template>
  <div class="py-4">
    <p
      class="m-0 text-base text-left"
      v-html="description"
    ></p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  description: string
}>()
</script>
