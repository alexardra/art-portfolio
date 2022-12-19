<template>
<div>
  <div class="work-tile position-relative">
    <button
      v-if="showNavigation && !prevDisabled"
      @click="goToPrev"
      class="nav-item"
      style="left: 0;"
    >
      <img src="@/assets/left-arrow.png"/>
    </button>
    <Suspense>
      <component 
        :is="currentTileComponent"
        v-bind="currentTile.details"
      />
      <template #fallback>
        Content fallback here
      </template> 
    </Suspense>
    <button
      v-if="showNavigation && !nextDisabled"
      @click="goToNext"
      class="nav-item"
      style="right: 0;"
      :disabled="nextDisabled"
    >
      <img src="@/assets/right-arrow.png"/>
    </button>
  </div>
</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  props: {
    content: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      currentTileIndex: 0,
    }
  },
  computed: {
    currentTile() {
      return this.content[this.currentTileIndex];
    },
    showNavigation() {
      return this.content.length > 1
    },
    prevDisabled() {
      return this.currentTileIndex === 0
    },
    nextDisabled() {
      return this.currentTileIndex === this.content.length - 1
    },
    currentTileComponent() {
      return {
        'iframe': defineAsyncComponent(
          () => import('./ProjectContentIframe.vue'),
        ),
        'image': defineAsyncComponent(
          () => import('./ProjectContentImage.vue'),
        ),
      }[this.currentTile.type]
    },
  },
  methods: {
    goToNext() {
      this.currentTileIndex += 1
    },
    goToPrev() {
      this.currentTileIndex -= 1
    }
  }
}
</script>

<style scoped>
.nav-item {
  position: absolute;
  color: red;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  height: 100%;
  width: 18px;
}
</style>