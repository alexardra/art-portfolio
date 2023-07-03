<template>
  <NavigationWrapper class="work-tile" :content="content">
    <template v-if="content" v-slot:content="{ currentTile, tileIndex }">
      <Suspense>
        <component
          :is="tileComponent(currentTile)"
          v-bind="currentTile.details"
          :content="content"
          :tileIndex="tileIndex"
        />
        <template #fallback>
          <div class="flex items-center justify-items-center w-100 h-100">
            <span>Loading ...</span>
          </div>
        </template>
      </Suspense>
    </template>
  </NavigationWrapper>
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
    },
  },
  methods: {
    tileComponent(tile) {
      return {
        iframe: defineAsyncComponent(() =>
          import('./ProjectContentIframe.vue')
        ),
        image: defineAsyncComponent(() => import('./ProjectContentImage.vue')),
        video: defineAsyncComponent(() => import('./ProjectContentVideo.vue')),
      }[tile.type]
    },
  },
}
</script>

<style lang="scss" scoped>
$dark: #242424;
.work-tile {
  box-sizing: content-box;
  width: 320px;
  height: 180px;
  border: 1px solid $dark;
  cursor: pointer;
}

@media only screen and (min-width: 480px) {
  .work-tile {
    width: 480px;
    height: 270px;
  }
}

@media only screen and (min-width: 600px) {
  .work-tile {
    width: 560px;
    height: 315px;
  }
}

@media only screen and (min-width: 768px) {
  .work-tile {
    width: 640px;
    height: 360px;
  }
}
</style>
