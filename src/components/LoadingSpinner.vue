<template>
  <svg
    class="animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :class="spinnerSizeMap[size]"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
  <span class="sr-only">Loading</span>
</template>

<script setup lang="ts">
const sizes = ['sm', 'md', 'lg'] as const
type Size = (typeof sizes)[number]

const spinnerSizeMap = {
  xs: 'h-2 w-2',
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-16 w-16',
  xl: 'h-24 w-24',
}
withDefaults(
  defineProps<{
    size?: Size
  }>(),
  {
    size: 'md',
  }
)
</script>
