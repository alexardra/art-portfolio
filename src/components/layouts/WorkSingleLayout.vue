<template>
  <main class="mx-auto w-100 max-w-640 d-flex">
    <slot name="title"> </slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="navigation"></slot>
  </main>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

main {
  height: calc(100vh - $h-header);
}
</style>
