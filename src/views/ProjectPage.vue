<script setup lang="ts">
import WorkMultipleLayout from '@/components/layouts/WorkMultipleLayout.vue'
import WorkSingleLayout from '@/components/layouts/WorkSingleLayout.vue'
import ErrorLayout from '@/components/layouts/ErrorLayout.vue'
import ProjectTitle from '@/components/ProjectTitle.vue'
import ProjectWorkItem from '@/components/ProjectWorkItem.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { computed, onMounted, ref, toRef } from 'vue'
import type { Project } from '@/types'
import { useProjects } from '@/composables/useProjects'

const props = defineProps<{
  projectId: string
}>()

const projectId = toRef(props, 'projectId')
const projects = ref<Project[] | null>(null)

onMounted(async () => {
  projects.value = await useProjects()
})

const project = computed(() => {
  if (projects.value === null) return null

  return projects.value.find(
    (p) => p.id === Number(projectId.value)
  )
})

const isLoading = computed(() => {
  return project.value === null
})

const isError = computed(() => {
  return project.value === undefined
})

const layoutComponent = computed(() => {
  if (isLoading.value) return null

  if (isError.value) return ErrorLayout

  return project.value?.items.length === 1
    ? WorkSingleLayout
    : WorkMultipleLayout
})
</script>

<template>
  <div v-if="isLoading" class="flex justify-center mt-10">
    <LoadingSpinner />
  </div>

  <component
    v-if="isError && layoutComponent"
    :is="layoutComponent"
  ></component>

  <component
    v-if="project && layoutComponent"
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
