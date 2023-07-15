<template>
  <div
    class="flex pl-[36px] items-center"
    :class="{ 'pl-[18px]': active }"
  >
    <i
      v-if="active"
      class="mx-1 w-[10px] h-[10px] bg-no-repeat bg-star-icon"
    ></i>
    <Link
      :to="to"
      active-class="font-bold text-red"
      :class="linkClasses"
    >
      {{ title }}
    </Link>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Link from './Link.vue'

const props = defineProps<{
  title: string
  to: string
  bold?: boolean
}>()

const route = useRoute()
const theme = useTheme()

const active = computed(() => {
  return route.path == props.to
})
const linkClasses = computed(() => {
  return [
    props.bold ? 'font-bold' : '',
    theme.value === 'light' ? 'text-dark' : 'text-light',
  ]
})
</script>
