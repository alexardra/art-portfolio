<template>
  <div class="flex justify-between py-4">
    <button
      @click="goToPrev"
      class="hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 shadow-sm rounded-md text-dark text-lg font-bold"
      type="submit"
      :disabled="prevDisabled"
    >
      &lt; Previous
    </button>
    <button
      @click="goToNext"
      class="hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 shadow-sm rounded-md text-dark text-lg font-bold"
      type="submit"
      :disabled="nextDisabled"
    >
      Next &gt;
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  current: number
  pageCount: number
}>()

const router = useRouter()

const prevDisabled = computed(() => props.current === 1)
const nextDisabled = computed(
  () => props.current === props.pageCount
)

const goToPrev = () => {
  router.push(`/work/${props.current - 1}`)
}
const goToNext = () => {
  router.push(`/work/${props.current + 1}`)
}
</script>
