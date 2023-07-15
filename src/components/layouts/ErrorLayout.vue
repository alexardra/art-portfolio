<template>
  <div class="flex flex-col gap-3 justify-center">
    <h1 class="font-bold text-dark text-3xl mt-10">
      Oops .. something went wrong
    </h1>
    <Link
      to="/work"
      class="text-dark hover:opacity-80 focus:opacity-80 underline"
    >
      Go back to works
    </Link>
  </div>
</template>

<script setup lang="ts">
import Link from '@/components/Link.vue'
</script>
