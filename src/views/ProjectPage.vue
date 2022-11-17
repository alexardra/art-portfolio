<template>
<div class="outer-p main">
  <div class="outer-mr">
    <h3 class="red">Title of project</h3>
    <div>Category</div>
  </div>
  <div class="outer-mr">
    Project explanation text allalalalalalla  This is student work. Names, characters, brands, places and incidents either are products of the author’s imagination or are used fictitiously. This work is designed to showcase the student’s ability to work with real world brands in real world applications. Any resemblance to actual events, brands, campaigns, locales or persons, living or dead, is entirely coincidental. This presentation is meant for educational purposes only.
  </div>
  <div>
    <div class="work-tile">
    </div>
  </div>
</div>
</template>

<style scoped>
.main > div {
  justify-content: center;
  display: flex;
  flex: 1 1 0px;
}

.main > div
 {
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.main > div:nth-of-type(2) {
  text-align: left;
  align-items: center;
}

.main > div:nth-of-type(3) {
  flex: 2 2 0px;
  align-items: end;
}
</style>