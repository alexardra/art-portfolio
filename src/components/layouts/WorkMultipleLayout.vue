<template>
  <main class="mx-4">
    <div class="flex flex-wrap border-dark">
      <slot name="title"></slot>
      <slot></slot>

      <slot name="description"></slot>
    </div>
    <slot name="navigation"></slot>
  </main>
</template>
