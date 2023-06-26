<template>
<div class="modal-window">
  <div class="modal">
    <NavigationWrapper
      id="fullscreen"
      size="large"
      :content="content"
      :startIndex="startTileIndex"
    >
      <template v-slot:content="{ currentTile }">
        <img
          class="border-dark"
          :src="import(`../assets/${currentTile.details.src}`)"
          :alt="currentTile.details.src"
        />
      </template>
    </NavigationWrapper>
  </div>
</div>
</template>

<script>
import NavigationWrapper from './NavigationWrapper.vue'

export default {
  components: {
    NavigationWrapper,
  },
  computed: {
    content() {
      return this.$root.galleryOptions.content
    }, 
    startTileIndex() {
      return this.$root.galleryOptions.startTileIndex
    },
  },
}
</script>

<style scoped>
img {
  max-width: 90vw;
  max-height: 90vh;
  /* box-shadow: 4px 4px 4px 4px rgb(0 0 0 / 10%); */
}
</style>