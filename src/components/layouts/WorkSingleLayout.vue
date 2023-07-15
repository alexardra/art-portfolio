<template>
  <main
    class="mx-auto w-full max-w-screen-2xl d-flex h-[calc(100vh - 60px)]"
  >
    <slot name="title"> </slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="navigation"></slot>
  </main>
</template>
