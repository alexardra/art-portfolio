<template>
  <div class="main align-items-center justify-center">
    <div class="img-container d-flex align-items-center">
      <img class="avatar" src="@/assets/about-me-avatar.png" />
      <div class="description">
        <img src="@/assets/about-me.svg" />
        <a
          class="link-container"
          href="/Ani_Barbakadze_CV.pdf"
          target="_blank"
        ></a>
      </div>
    </div>
  </div>
</template>

/**
 image size: 715 x 818
*/
<style scoped>
.main {
  position: relative;
  top: -60px;
  width: 100vw;
  height: 100vh;
}

.img-container {
  position: absolute;
  column-gap: 10px;
  /* border: 1px solid red; */
}

.link-container {
  position: absolute;
  bottom: 0px;
  right: 30%;
  width: 20%;
  height: 5%;
  /* border: 1px solid blue; */
}

.avatar {
  width: 70px;
  max-height: calc(100vh - 60px);
}

.description {
  width: 250px;
  max-height: calc(100vh - 60px);
}

.description img {
  width: 100%;
  max-height: calc(100vh - 60px);
}

@media only screen and (min-width: 480px) {
  .avatar {
    width: 100px;
  }
  .description {
    width: 360px;
  }
}

@media only screen and (min-width: 600px) {
  .avatar {
    width: 120px;
  }
  .description {
    width: 400px;
  }
}

@media only screen and (min-width: 768px) {
  .avatar {
    width: 135px;
  }
  .description {
    width: 440px;
  }
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1200px) {
}
</style>