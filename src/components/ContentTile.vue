<template>
<div class="content">
  <button>
    <router-link to="/work/1" :key="$route.path">Check out this work</router-link>
  </button>
  <div class="mt-3 small">
    (For now this is a placeholder, each portfolio work will be presented here and will have a way to navigate to page dedicated to each project)
  </div>
</div>
</template>

<style scoped>
.content {
  border: 1px solid #242424;
}

button {
  border: none;
  margin-top: 30px;
}
</style>