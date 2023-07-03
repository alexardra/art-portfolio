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
  <div v-if="project" class="outer-mx outer-pt border-dark">
    <ProjectTitle
      :title="project.title"
      :role="project.role"
      :author="project.author"
    />
    <div v-for="(work, index) in project.works" :key="index" class="w-100">
      <img :src="`/src/assets/${work.details.src}`" class="w-100" />
    </div>
    <div class="outer-pt">
      <ProjectDescription :description="project.description" />
    </div>
    <div class="outer-pt">
      <ProjectNavigation :current="project.id" />
    </div>
  </div>
</template>

<style scoped lang="scss">
/* temp */
$spacing: 20px;

.outer-mx {
  margin-left: $spacing;
  margin-right: $spacing;
}

.outer-pt {
  padding-top: $spacing;
}
</style>
