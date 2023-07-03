<template>
  <div
    class="flex nav-item items-center"
    :class="{ 'nav-item-active': active }"
  >
    <i v-if="active" class="i-active"></i>
    <Link
      :to="to"
      active-class="font-bold red"
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
    theme.value === 'light' ? 'dark' : 'light',
  ]
})
</script>

<style scoped lang="scss">
.nav-item {
  padding-left: 36px;
}

.nav-item-active {
  padding-left: 18px;
}

.i-active {
  background-image: url('@/assets/star-icon.svg');
  background-repeat: no-repeat;
  width: 10px;
  height: 10px;
  margin: 0 4px;
}
</style>
