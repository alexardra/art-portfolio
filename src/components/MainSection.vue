<template>
<section class="main px-2 py-3">
  <div class="container">
    <div class="content">
    </div>
  </div>
  <div class="container">
    <div class="content">
    </div>
  </div>
  <div class="container">
    <div class="content">
    </div>
  </div>
  <div class="container">
    <div class="content">
    </div>
  </div>
  <div class="container">
    <div class="content">
    </div>
  </div>
  <div class="container">
    <div class="content">
    </div>
  </div>
  <div class="container">
    <div class="content">
    </div>
  </div>
  <div class="container">
    <div class="content">
    </div>
  </div>           
</section>
</template>

<script>
</script>

<style scoped>
.main {
  width: 100%;
  height: calc(100vh - 175px);
  display: flex;
  flex-wrap: wrap;
}
.container {
  flex: 1 0 25%;
  border: 1px solid #242424;
  padding: 35px;
}

.content {
  background-image: url("@/assets/sample.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>