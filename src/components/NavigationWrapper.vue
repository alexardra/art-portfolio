<template>
<div class="position-relative">
  <button
    v-if="showNavigation && !prevDisabled"
    @click="goToPrev"
    class="nav-item"
    style="left: 5px;"
  >
    <img src="@/assets/left-arrow.png"/>
  </button>
  <slot name="content" :currentTile="currentTile" :tileIndex="currentTileIndex"></slot>
  <button
      v-if="showNavigation && !nextDisabled"
      @click="goToNext"
      class="nav-item"
      style="right: 5px;"
      :disabled="nextDisabled"
  >
    <img src="@/assets/right-arrow.png"/>
  </button>
</div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
    startIndex: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      currentTileIndex: 0,
    }
  },
  created() {
    this.currentTileIndex = this.startIndex
  },
  computed: {
    currentTile() {
      return this.content && this.content[this.currentTileIndex];
    },
    showNavigation() {
      return this.content && this.content.length > 1
    },
    prevDisabled() {
      return this.currentTileIndex === 0
    },
    nextDisabled() {
      return this.currentTileIndex === this.content.length - 1
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
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  height: 100%;
  width: 18px;
  top: 0;
}
</style>