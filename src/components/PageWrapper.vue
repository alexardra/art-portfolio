<template>
<component 
  :is="pageWrapperComponent"
>
  <template #default>
    <slot></slot>
  </template>
</component>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  computed: {
    pageWrapperComponent() {
      return {
        'light': defineAsyncComponent(
          () => import('./PageWrapperLight.vue'),
        ),
        'dark': defineAsyncComponent(
          () => import('./PageWrapperDark.vue'),
        ),        
      }[this.mode]
    },
  },
}
</script>