<template>
  <div class="main align-items-center justify-center">
    <img id="title" src="@/assets/main-page.png" />
    <div id="overlay" class="w-overlay h-overlay"></div>
    <img class="cover" src="@/assets/main-page-stars.png" />
  </div>
</template>

<style scoped>
.main {
  position: relative;
  top: -60px;
  width: 100vw;
  height: 100vh;
}

#title {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
}

.cover {
  display: none;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
}

#overlay {
  z-index: 100;
  position: absolute;
}

#overlay:hover + .cover {
  display: block;
}

.w-overlay {
  width: 100%;
}

.h-overlay {
  height: 200px;
}

@media only screen and (min-width: 600px) {
  .w-overlay {
    width: 475px;
  }
}

@media only screen and (min-width: 768px) {
  .w-overlay {
    width: 620px;
  }
}

@media only screen and (min-width: 992px) {
  .w-overlay {
    width: 800px;
  }
}

@media only screen and (min-width: 1200px) {
  .w-overlay {
    width: 1000px;
  }
}
</style>