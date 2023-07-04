<script setup lang="ts">
import WorkMultipleLayout from '@/components/layouts/WorkMultipleLayout.vue'
import WorkSingleLayout from '@/components/layouts/WorkSingleLayout.vue'
import ProjectTitle from '@/components/ProjectTitle.vue'
import ProjectWorkItem from '@/components/ProjectWorkItem.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import { computed, onMounted, ref } from 'vue'
import type { Project } from '@/types'

const props = defineProps<{
  projectId: string
}>()

const project = ref<Project>()

onMounted(async () => {
  const response = await fetch('/projects.json')
  const file: Project[] = await response.json()

  project.value = file.find(
    (p) => p.id === Number(props.projectId)
  )
})

const layoutComponent = computed(() => {
  if (!project) return null

  return project.value?.items.length === 1
    ? WorkSingleLayout
    : WorkMultipleLayout
})
</script>

<template>
  <component
    v-if="layoutComponent && project"
    :is="layoutComponent"
  >
    <template #title>
      <ProjectTitle
        :title="project.title"
        :role="project.role"
        :author="project.author"
      />
    </template>
    <template #description v-if="project.description">
      <ProjectDescription
        :description="project.description"
      />
    </template>

    <ProjectWorkItem
      v-for="item in project.items"
      :key="item.id"
      :item="item"
    />

    <template #navigation>
      <ProjectNavigation
        :current="project.id"
        :pageCount="8"
      />
    </template>
  </component>
</template>
