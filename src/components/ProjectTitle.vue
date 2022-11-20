<template>
<div class="d-flex justify-center align-start flex-direction-column">
  <h3 class="red">
    {{ title }}
  </h3>
  <h4 class="dark">
    {{ subtitle }}
  </h4>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
div {
  row-gap: 4px;  
}

h3 {
  margin: 0;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
}

h4 {
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
}
</style>
