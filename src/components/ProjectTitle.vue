<template>
  <div class="w-full text-left py-4">
    <h1 class="red m-0 mb-2">{{ title }}</h1>
    <h3 v-if="role" class="dark font-light m-0 text-sm">
      Role: {{ role }};
    </h3>
    <h3
      v-if="author"
      v-html="author"
      class="dark font-light m-0 text-sm"
    ></h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  role?: string
  author?: string
}>()
</script>
