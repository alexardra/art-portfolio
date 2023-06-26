<template>
  <Suspense>
    <div class="content bg">
      <slot></slot>
    </div>
    <template #fallback>
      <div class="content bg-fallback">
        <slot></slot>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>
.content {
  width: 100%;
  height: 100%;
}

.bg-fallback {
  background-color: #2d2d2c;
}
</style>
