<template>
<footer class="w-footer outer-p bg-dark light d-flex align-items-center justify-center">
  <p>© Ani Barbakadze</p>
  <p>This is student work. Names, characters, brands, places and incidents either are products of the author’s imagination or are used fictitiously.This work is designed to showcase the student’s ability to<br/> work with real world brands in real world applications. Any resemblance to actual events, brands, campaigns, locales or persons, living or dead, is entirely coincidental. This presentation is meant for<br>educational purposes only.
  </p>
  <p><span>Miami Ad School</span> Europe</p>
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
}

footer p:nth-of-type(3) {
  font-family: Helvetica;
  font-style: normal;  
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  margin: 0;
}

footer p:nth-of-type(3) span {
  font-family: Helvetica;
  font-weight: 800;
}
</style>