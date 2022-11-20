<template>
<div class="outer-p main">
  <div
    v-for="(i, index) in $options.count"
    @mouseover="onMouseOver(index)"
    :key="i"
    :class="currentBorderGrid[index]"
  >
    <!-- <WorkPageNavItem
      v-if="index === 0"
      v-bind="projects[index]"
    /> -->
    <router-link
      v-if="index === 0"
      :to="`/work/${projects[index].id}`"
    >
      <img 
        src="@/assets/previews/gaia-preview.svg"
        :alt="preview"
      />
    </router-link> 

    <img 
      v-else-if="index === 1"
      src="@/assets/previews/chill-bg-preview.svg"
      :alt="preview"
    />
    <img 
      v-else-if="index === 2"
      src="@/assets/previews/mac-with-bg-preview.svg"
      :alt="preview"
    />
    <img 
      v-else-if="index === 3"
      src="@/assets/previews/ui-uxd-preview.svg"
      :alt="preview"
    />
    <img 
      v-else
      src="@/assets/previews/coming-soon-with-bg-preview.svg"
      :alt="preview"
    />            
  </div>
</div>
</template>

<script>
import projects from '~/projects.json'
// import WorkPageNavItem from '@/components/WorkPageNavItem.vue'

export default {
  components: {
    // WorkPageNavItem
  },
  count: 8,
  borderGrid: [
    ['top', 'bottom', 'left'],
    ['top', 'bottom', 'left'],
    ['top', 'bottom', 'left'],
    ['top', 'right', 'bottom', 'left'],
    ['bottom', 'left'],
    ['bottom', 'left'],
    ['bottom', 'left'],
    ['right', 'bottom', 'left'],
  ],
  data() {
    return {
      selectedGridIndex: null,
    }
  },
  computed: {
    currentBorderGrid() {
      if (this.selectedGridIndex === null)
        return this.$options.borderGrid

      return this.$options.borderGrid.map((borders, index) => {
        if (index === this.selectedGridIndex)
          return [...borders, 'border-red']

        const isRight = index - this.selectedGridIndex === 1 && index % 4 !== 0
        if (isRight)
          return [...borders, 'border-left-red']

        const isTop = this.selectedGridIndex - index === 4
        if (isTop)
          return [...borders, 'border-bottom-red']

        return borders
      })
    },
    projects() {
      return projects.map(project => ({ 
        id: project.id,
        url: project.preview,
        preview: project.title,
      }))
    },
  },
  methods: {
    onMouseOver(el) {
      this.selectedGridIndex = el
    },
  },
}
</script>

<style scoped>
.main {
  flex-wrap: wrap;
}

.main > div {
  flex: 1 0 25%;
  height: 50%;
}

.top {
  border-top: 1px solid #242424;
}

.left {
  border-left: 1px solid #242424;
}

.bottom {
  border-bottom: 1px solid #242424;
}

.right {
  border-right: 1px solid #242424;
}

img {
  width: 100%;
  height: 100%;
}
</style>