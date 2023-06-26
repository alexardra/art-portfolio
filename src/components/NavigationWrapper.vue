<template>
  <div class="position-relative">
    <button
      v-if="showNavigation && !prevDisabled"
      @click.stop="goToPrev"
      class="nav-item"
      :style="`left: 0px; width: ${this.navItemSize}px;`"
    >
      <img src="@/assets/left-arrow.png" />
    </button>
    <slot
      name="content"
      :currentTile="currentTile"
      :tileIndex="currentTileIndex"
    ></slot>
    <button
      v-if="showNavigation && !nextDisabled"
      @click.stop="goToNext"
      class="nav-item"
      :style="`right: 0px; width: ${this.navItemSize}px;`"
      :disabled="nextDisabled"
    >
      <img src="@/assets/right-arrow.png" />
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
    },
    size: {
      type: String,
      default: "small", // small, large
    },
  },
  data() {
    return {
      currentTileIndex: 0,
    };
  },
  computed: {
    currentTile() {
      return this.content && this.content[this.currentTileIndex];
    },
    showNavigation() {
      return this.content && this.content.length > 1;
    },
    prevDisabled() {
      return this.currentTileIndex === 0;
    },
    nextDisabled() {
      return this.currentTileIndex === this.content.length - 1;
    },
    navItemSize() {
      return this.size === "small" ? 25 : 50;
    },
  },
  methods: {
    goToNext() {
      this.currentTileIndex += 1;
    },
    goToPrev() {
      this.currentTileIndex -= 1;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.currentTileIndex = this.startIndex;
      },
    },
  },
};
</script>

<style scoped>
.nav-item {
  position: absolute;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  height: 100%;
  top: 0;
  cursor: pointer;
}
</style>
