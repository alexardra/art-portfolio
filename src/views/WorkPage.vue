<template>
  <div class="outer-p main">
    <div
      v-for="(i, index) in $options.count"
      @mouseover="onMouseOver(index)"
      :key="i"
      :class="currentBorderGrid[index]"
    >
      <WorkPageNavItem v-bind="projects[index]" />
    </div>
  </div>
</template>

<script>
import WorkPageNavItem from "@/components/WorkPageNavItem.vue";

export default {
  components: {
    WorkPageNavItem,
  },
  count: 8,
  borderGrid: [
    ["top", "bottom", "left"],
    ["top", "bottom", "left"],
    ["top", "bottom", "left"],
    ["top", "right", "bottom", "left"],
    ["bottom", "left"],
    ["bottom", "left"],
    ["bottom", "left"],
    ["right", "bottom", "left"],
  ],
  data() {
    return {
      selectedGridIndex: null,
      allProjects: null,
    };
  },
  async mounted() {
    const response = await fetch("/projects.json");
    const file = await response.json();
    console.log("cool file", file);
    this.allProjects = file
  },
  computed: {
    currentBorderGrid() {
      if (this.selectedGridIndex === null) return this.$options.borderGrid;

      return this.$options.borderGrid.map((borders, index) => {
        if (index === this.selectedGridIndex) return [...borders, "border-red"];

        const isRight = index - this.selectedGridIndex === 1 && index % 4 !== 0;
        if (isRight) return [...borders, "border-left-red"];

        const isTop = this.selectedGridIndex - index === 4;
        if (isTop) return [...borders, "border-bottom-red"];

        return borders;
      });
    },
    projects() {
      if (this.allProjects === null)
        return []

      return this.allProjects.map((project) => ({
        id: project.id,
        url: project.preview,
        preview: project.title,
        thumbnail: project.thumbnail,
        blocked: project.blocked,
      }));
    },
  },
  methods: {
    onMouseOver(el) {
      this.selectedGridIndex = el;
    },
  },
};
</script>

<style lang="scss" scoped>
$red: #ff6666;
$dark: #242424;

.outer-p {
  padding: 10px;
}
.main {
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: center;
}

.left {
  border: 1px solid $dark;
}

.main > div {
  width: calc(100% - 4px);
  height: 350px;
  margin: 2px;
}

img {
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 480px) {
  .main > div {
    max-width: 350px;
  }
  .outer-p {
    padding: 20px;
  }
}

@media only screen and (min-width: 992px) {
  .main {
    overflow: hidden;
    justify-content: start;
  }

  .main > div {
    flex: 1 0 25%;
    height: 50%;
    max-width: 25%;
    margin: 0;
    border: 0;
  }

  .top {
    border-top: 1px solid $dark !important;
  }

  .left {
    border-left: 1px solid $dark !important;
  }

  .bottom {
    border-bottom: 1px solid $dark !important;
  }

  .right {
    border-right: 1px solid $dark !important;
  }

  .border-top-red {
    border-top-color: $red !important;
  }

  .border-right-red {
    border-right-color: $red !important;
  }

  .border-bottom-red {
    border-bottom-color: $red !important;
  }

  .border-left-red {
    border-left-color: $red !important;
  }
  .border-red {
    border-color: $red !important;
  }
}
</style>