<template>
<ul>
  <li>Work</li>
  <li>Me</li>
  <li>Starsheep</li>
  <li>Contact</li>
</ul>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  color: white;
  display: flex;
  justify-content: end;
}

ul li {
  padding: 10px;
  margin: 0 10px;
  display: inline-block;
}
</style>