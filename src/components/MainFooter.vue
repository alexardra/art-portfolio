<template>
  <footer
    class="
      w-footer
      outer-p
      bg-dark
      light
      d-flex
      align-items-center
      justify-center
    "
  >
    <p>© Ani Barbakadze</p>
    <p class="c-text">
      This is student work. Names, characters, brands, places and incidents
      either are products of the author’s imagination or are used
      fictitiously.This work is designed to showcase the student’s ability to<br />
      work with real world brands in real world applications. Any resemblance to
      actual events, brands, campaigns, locales or persons, living or dead, is
      entirely coincidental. This presentation is meant for<br />educational
      purposes only.
    </p>
    <Suspense>
      <a
        href="https://www.miamiadschool.de/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="@/assets/miami-ad-school-logo.svg" />
      </a>
    </Suspense>
  </footer>
</template>


<style scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: column;
  row-gap: 8px;
}

footer p:nth-of-type(1) {
  font-family: Helvetica;
  font-style: normal;
  font-weight: 300;
  font-size: 8px;
  line-height: 9px;
  margin: 0;
}

footer p:nth-of-type(2) {
  font-family: Helvetica;
  font-style: normal;
  font-weight: 300;
  font-size: 8px;
  line-height: 9px;
  text-align: center;
  margin: 0;
  /* display: none; */
}

/* @media only screen and (min-width: 768px) {
  footer p:nth-of-type(2) {
    display: block;
  }
} */
</style>