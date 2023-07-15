<template>
  <GridLayout>
    <template
      v-for="(slot, index) in 8"
      v-slot:[`item-${index}`]
    >
      <WorkPageNavItem
        v-if="projects"
        v-bind="projects[index]"
      />
    </template>
  </GridLayout>
</template>

<script setup lang="ts">
import GridLayout from '@/components/layouts/GridLayout.vue'
import WorkPageNavItem from '@/components/WorkPageNavItem.vue'
import { useProjects } from '@/composables/useProjects'
import { onMounted, ref } from 'vue'

const projects = ref()
onMounted(async () => {
  projects.value = await useProjects()
})
</script>
