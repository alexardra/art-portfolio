<template>
  <router-link to="/" class="w-logo h-logo">
    <Suspense>
      <img class="w-100 h-100" src="@/assets/logo-light.svg" alt="Logo" />
      <template #fallback>
        <LogoFallback />
      </template>
    </Suspense>
  </router-link>
</template>

<script>
import LogoFallback from "./LogoFallback.vue";

export default {
  components: {
    LogoFallback,
  },
};
</script>