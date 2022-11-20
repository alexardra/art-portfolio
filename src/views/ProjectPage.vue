<template>
<div class="outer-p main">
  <ProjectTitle
    :title="project.title"
    :subtitle="project.category"
  />
  <ProjectDescription 
    :description="project.description"
  />
  <ProjectContent
    :content="project.works"
  />
</div>
</template>

<script>
import ProjectTitle from '@/components/ProjectTitle.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import ProjectContent from '@/components/ProjectContent.vue'

export default {
  components: {
    ProjectTitle,
    ProjectDescription,
    ProjectContent,
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
.main {
  column-gap: 20px;
}
.main > div {
  justify-content: center;
  display: flex;
  flex: 1 1 0px;
}

.main > div
 {
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.main > div:nth-of-type(2) {
  text-align: left;
  align-items: center;
}

.main > div:nth-of-type(3) {
  flex: 2 2 0px;
  align-items: end;
}
</style>