<template>
  <Suspense>
    <div class="w-full h-screen bg-dark-cover">
      <slot></slot>
    </div>
    <template #fallback>
      <div class="h-[calc(100vh-60px)] bg-dark">
        <slot></slot>
      </div>
    </template>
  </Suspense>
</template>
