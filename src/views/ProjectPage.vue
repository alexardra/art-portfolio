<script setup lang="ts">
import ProjectTitle from '@/components/ProjectTitle.vue'
import ProjectContent from '@/components/ProjectContent.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import { onMounted, ref } from 'vue'
import type { Project } from '@/types'

const props = defineProps<{
  projectId: string
}>()

const project = ref<Project | null>(null)

onMounted(async () => {
  const response = await fetch('/projects.json')
  const file = await response.json()
  console.log(file)

  project.value = file.find((p) => p.id === Number(props.projectId))
})
</script>

<template>
  <div class="outer-mx outer-py border-dark">
    <ProjectTitle
      v-if="project"
      :title="project.title"
      :role="project.role"
      :author="project.author"
    />
  </div>

  <!-- <ProjectContent :content="project.works" /> -->
  <!-- <ProjectDescription :description="project.description" /> -->
  <!-- <ProjectNavigation :current="project.id" /> -->
</template>

<style scoped lang="scss">
/* temp */
$spacing: 20px;

.outer-mx {
  margin-left: $spacing;
  margin-right: $spacing;
}

.outer-py {
  padding-top: $spacing;
  padding-bottom: $spacing;
}
</style>
