<template>
<div>
  <NavigationWrapper
    class="work-tile"
    :content="content"
  >
    <template
      v-if="content"
      v-slot:content="{ currentTile, tileIndex }"
    >
      <Suspense>
        <component 
          :is="tileComponent(currentTile)"
          v-bind="currentTile.details"
          :content="content"
          :tileIndex="tileIndex"
        />
        <template #fallback>
          <span>This work is not available yet...</span>
        </template> 
      </Suspense>
    </template>
  </NavigationWrapper>
</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import NavigationWrapper from './NavigationWrapper.vue'

export default {
  components: {
    NavigationWrapper,
  },
  props: {
    content: {
      type: Array,
      required: true,
    }
  },
  methods: {
    tileComponent(tile) {
      return {
        'iframe': defineAsyncComponent(
          () => import('./ProjectContentIframe.vue'),
        ),
        'image': defineAsyncComponent(
          () => import('./ProjectContentImage.vue'),
        ),
      }[tile.type]
    },
  },
}
</script>