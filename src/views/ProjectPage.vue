<template>
<div class="outer-p main justify-center">
  <div class="d-flex flex-direction-column project-container hd-size">
    <ProjectTitle
      :title="project.title"
      :role="project.role"
      :author="project.author"
    />
    <ProjectContent 
      :content="project.works"
    />
    <ProjectDescription 
      :description="project.description"
    />
    <ProjectNavigation 
      :current="project.id"
    />
  </div>
</div>
</template>

<script>
import ProjectTitle from '@/components/ProjectTitle.vue'
import ProjectContent from '@/components/ProjectContent.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'

export default {
  components: {
    ProjectTitle,
    ProjectDescription,
    ProjectContent,
    ProjectNavigation,
  },
  props: {
    project: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
.project-container {
  row-gap: 16px;
}
</style>