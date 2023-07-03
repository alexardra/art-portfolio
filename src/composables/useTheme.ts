import { useRoute } from 'vue-router'
import type { Theme } from '@/types'
import { computed, type ComputedRef } from 'vue'

export function useTheme(): ComputedRef<Theme> {
  const route = useRoute()

  return computed(() => {
    return route.path === '/' ? 'dark' : 'light'
  })
}
