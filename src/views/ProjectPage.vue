<script setup lang="ts">
import ProjectTitle from '@/components/ProjectTitle.vue'
import ProjectWorkItem from '@/components/ProjectWorkItem.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import { onMounted, ref } from 'vue'
import type { Project } from '@/types'

const props = defineProps<{
  projectId: string
}>()

const project = ref<Project | undefined>()

onMounted(async () => {
  const response = await fetch('/projects.json')
  const file: Project[] = await response.json()

  project.value = file.find(
    (p) => p.id === Number(props.projectId)
  )
})
</script>

<template>
  <div v-if="project" class="flex m-20 flex-col">
    <div class="grid border-dark w-100">
      <ProjectTitle
        class="grid-item"
        :title="project.title"
        :role="project.role"
        :author="project.author"
      />
      <ProjectWorkItem
        v-for="item in project.items"
        class="grid-item"
        :key="item.id"
        :item="item"
      />
      <ProjectDescription
        v-if="project.description"
        class="grid-item"
        :description="project.description"
      />
    </div>
    <ProjectNavigation
      :current="project.id"
      :pageCount="8"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';
.grid {
  display: flex;
  flex-wrap: wrap;
}

.grid-item {
  flex-basis: 100%;
}

@media (min-width: $breakpoint-desktop-m) {
  .grid-item:nth-last-of-type(-n + 2) {
    flex-basis: 50%;
  }
}
</style>
