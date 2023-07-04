<template>
  <div class="spinner"></div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.spinner {
  margin: 0 auto;
  border-radius: 100%;
  border: 3px solid $dark;
  border-top: 3px solid #f6f5ec;
  width: 24px;
  height: 24px;
  transition: all 0.3s linear;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
