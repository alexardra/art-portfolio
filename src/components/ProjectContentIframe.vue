<template>
  <div class="p-20">
    <div
      class="flex border-dark items-center justify-items-center"
      :style="{
        width: `${width + 2}px`,
        height: `${height + 2}px`,
      }"
    >
      <LoadingSpinner v-if="!loaded" />
      <iframe
        v-show="loaded"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        @load="loaded = true"
        :src="src"
        :width="width"
        :height="height"
      >
      </iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoadingSpinner from './LoadingSpinner.vue'
import { ref } from 'vue'

type Props = {
  src: string
  width?: number
  height?: number
}

withDefaults(defineProps<Props>(), {
  width: 640,
  height: 360,
})

const loaded = ref(false)
</script>
