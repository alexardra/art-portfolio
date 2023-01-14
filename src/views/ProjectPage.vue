<template>
  <div class="main justify-center">
    <div class="d-flex flex-direction-column">
      <div class="d-flex flex-direction-column project-container hd-width">
        <ProjectTitle
          :title="project.title"
          :role="project.role"
          :author="project.author"
        />
        <ProjectContent :content="project.works" />
        <ProjectDescription :description="project.description" />
      </div>
      <ProjectNavigation :current="project.id" />
    </div>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectContent from "@/components/ProjectContent.vue";
import ProjectDescription from "@/components/ProjectDescription.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";

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
    },
  },
};
</script>

<style scoped>
.main {
  overflow-y: auto;
  overflow-x: hidden;
}

.main > div {
  row-gap: 16px;
}
.project-container {
  row-gap: 16px;
  height: 650px;
}

.hd-width {
  width: 320px;
}

.hd-height {
  height: 180px;
}

@media only screen and (min-width: 480px) {
  .hd-width {
    width: 480px;
  }

  .hd-height {
    height: 270px;
  }
}

@media only screen and (min-width: 600px) {
  .hd-width {
    width: 560px;
  }

  .hd-height {
    height: 315px;
  }
}

@media only screen and (min-width: 768px) {
  .hd-width {
    width: 640px;
  }

  .hd-height {
    height: 360px;
  }
}

@media only screen and (min-height: 800px) {
  .main {
    overflow-y: hidden;
  }
}
</style>