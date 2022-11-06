<template>
<div class="main">
  <div class="first p-3">
    <h3>Title of project</h3>
    <div>Category</div>
  </div>

  <div class="second p-3">
    Project explanation text allalalalalalla  This is student work. Names, characters, brands, places and incidents either are products of the author’s imagination or are used fictitiously. This work is designed to showcase the student’s ability to work with real world brands in real world applications. Any resemblance to actual events, brands, campaigns, locales or persons, living or dead, is entirely coincidental. This presentation is meant for educational purposes only.
  </div>
  <div class="third p-3">
    <ContentTile />
  </div>
</div>
</template>

<script>
import ContentTile from '@/components/ContentTile.vue';

export default {
  components: {
    ContentTile,
  },
}
</script>

<style scoped>
.main {
  width: 100%;
  height: calc(100vh - 175px);
  display: flex;
  flex-wrap: wrap;
}

.first {
  flex: 1 0 20%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.first h3 {
  color: #FC6D5E;
  font-weight: bold;
}
.second {
  flex: 1 0 30%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
}
.third {
  flex: 1 0 50%;
}
</style>