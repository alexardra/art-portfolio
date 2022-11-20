<template>
<div>
  <div class="work-tile">
    <Suspense>
      <component 
        :is="currentTileComponent"
        v-bind="currentTile.details"
      />
      <template #fallback>
        <!-- Content fallback here -->
      </template> 
    </Suspense>
  </div>
</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// for each project have a tile with also navigation inside this route
// have index of currently shown tile, lazy load all the others
// right now just show one

// components for tiles can be iframe or img at this moment
// do it with suspense
export default {
  props: {
    content: {
      type: Array,
      required: true,
    }
  },
  computed: {
    currentTile() {
      return this.content[0];
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
}
</script>