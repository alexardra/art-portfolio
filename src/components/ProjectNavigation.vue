<template>
  <div class="flex justify-between py-20">
    <button
      @click="goToPrev"
      class="dark text-lg font-bold"
      type="submit"
      :disabled="prevDisabled"
    >
      &lt; Previous
    </button>
    <button
      @click="goToNext"
      class="dark text-lg font-bold"
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

<style scoped>
button {
  outline: none;
  background: inherit;
  border: 0;
  padding: 0;
}

button:hover {
  opacity: 0.9;
}

button:disabled {
  color: #bfbebe;
}
</style>
