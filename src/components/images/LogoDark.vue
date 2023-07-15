<template>
  <router-link
    to="/"
    class="block w-[35px] h-[15px] md:w-[60px] md:h-[20px]"
  >
    <Suspense>
      <img
        class="w-full h-full"
        src="@/assets/logo-dark.svg"
        alt="Logo"
      />
      <template #fallback>
        <div class="w-full h-full"></div>
      </template>
    </Suspense>
  </router-link>
</template>
