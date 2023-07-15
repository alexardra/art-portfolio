<template>
  <main class="flex flex-wrap p-20">
    <div
      class="col col-top"
      :class="{
        'col-top-row-sibling-hover':
          currentHoverIndex === 5,
      }"
    >
      <slot name="item-0"></slot>
    </div>
    <div
      class="col col-top"
      :class="{
        'col-top-row-sibling-hover':
          currentHoverIndex === 6,
      }"
    >
      <slot name="item-1"></slot>
    </div>
    <div
      class="col col-top"
      :class="{
        'col-top-row-sibling-hover':
          currentHoverIndex === 7,
      }"
    >
      <slot name="item-2"></slot>
    </div>
    <div
      class="col col-top col-last"
      :class="{
        'col-top-row-sibling-hover':
          currentHoverIndex === 8,
      }"
    >
      <slot name="item-3"></slot>
    </div>
    <div
      class="col col-bottom"
      @mouseover="onMouseover(5)"
      @mouseout="onMouseout"
    >
      <slot name="item-4"></slot>
    </div>
    <div
      class="col col-bottom"
      @mouseover="onMouseover(6)"
      @mouseout="onMouseout"
    >
      <slot name="item-5"></slot>
    </div>
    <div
      class="col col-bottom"
      @mouseover="onMouseover(7)"
      @mouseout="onMouseout"
    >
      <slot name="item-6"></slot>
    </div>
    <div
      class="col col-bottom col-last"
      @mouseover="onMouseover(8)"
      @mouseout="onMouseout"
    >
      <slot name="item-7"></slot>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentHoverIndex = ref<number | null>(null)

const onMouseover = (index: number) => {
  currentHoverIndex.value = index
}

const onMouseout = () => {
  currentHoverIndex.value = null
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.col {
  flex-basis: calc(100% - 4px);
  height: 350px;
  margin: 2px;
  border: 1px solid $dark;
}

.col:hover {
  border-color: $red;
}

@media (min-width: $breakpoint-mobile-l) {
  .col {
    flex-basis: calc(50% - 4px);
  }
}

@media (min-width: $breakpoint-desktop-m) {
  main {
    height: calc(100vh - $h-header);
  }

  .col {
    flex: 1 0 25%;
    height: 50%;
    max-width: 25%;
    margin: 0;
  }

  .col-top {
    border-top: 1px solid $dark;
    border-right: none;
    border-bottom: 1px solid $dark;
    border-left: 1px solid $dark;
  }

  .col-last {
    border-right: 1px solid $dark;
  }

  .col-bottom,
  .col-bottom,
  .col-bottom {
    border-top: none;
    border-right: none;
    border-bottom: 1px solid $dark;
    border-left: 1px solid $dark;
  }

  .col-last {
    border-right: 1px solid $dark;
  }

  .col:hover + .col {
    border-left: 1px solid $red;
  }

  .col-top-row-sibling-hover {
    border-bottom: 1px solid $red;
  }
}
</style>
