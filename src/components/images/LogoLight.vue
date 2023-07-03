<template>
  <router-link to="/" class="w-logo h-logo">
    <Suspense>
      <img class="w-100 h-100" src="@/assets/logo-light.svg" alt="Logo" />
      <template #fallback>
        <div class="logo"></div>
      </template>
    </Suspense>
  </router-link>
</template>

<style scoped lang="scss">
@mixin change($w, $h) {
  .logo {
    width: $w;
    height: $h;
  }
}
// @include change($w: 35px, $h: 15px);

// $w-logo: 35px;
// $h-logo: 15px;

// $w-logo: 60px;
// $h-logo: 20px;

// @media only screen and (min-width: 600px) {
@include change($w: 60px, $h: 20px);
// }
</style>
