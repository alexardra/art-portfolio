<template>
  <div class="bg-inherit flex justify-items-center items-center content">
    <div class="flex">
      <img class="avatar" src="@/assets/about-me-avatar.webp" />
      <div class="flex flex-col red text">
        <div class="flex">
          <h1 class="m-0">Ani</h1>
          <h3 class="m-0">(she/they)</h3>
        </div>
        <p class="m-0 text-left">
          I am an Art Director. I have a background in graphic design and
          illustration. I have never-ending ideas about anything. I am inspired
          by music, film, fashion, and all kinds of art, most notably by
          connections (aka my friends). I've always felt like a misfit all my
          life, but now I am starting to accept the cringe and lean confidently
          into my awkwardnes. I am a maladaptive daydreamer, which is not always
          fun but it's super useful in the creative industry. Anyways here is my
          <span>
            <a href="/Ani_Barbakadze_CV.pdf" target="_blank">CV.</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

$w-xs: 70px;
$w-s: 100px;
$w-m: 120px;
$w-l: 135px;

$w-text-xs: 250px;
$w-text-s: 360px;
$w-text-m: 400px;
$w-text-l: 440px;

$font-size-text-xs: 20px;
$font-size-text-s: 20px;
$font-size-text-m: 20px;
$font-size-text-l: 20px;

/** temp */
.content {
  height: calc(100vh - 60px);
}

/*** */
.avatar {
  width: $w-xs;
}

.text {
  width: $w-text-xs;
}

@media only screen and (min-width: $breakpoint-mobile-m) {
  .avatar {
    width: $w-s;
  }
  .text {
    width: $w-text-s;
  }
}

@media only screen and (min-width: $breakpoint-mobile-l) {
  .avatar {
    width: $w-m;
  }
  .text {
    width: $w-text-m;
  }
}

@media only screen and (min-width: $breakpoint-tablet) {
  .avatar {
    width: $w-l;
  }
  .text {
    width: $w-text-l;
  }
}
</style>
