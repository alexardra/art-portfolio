<template>
<div>
  {{ description }}
</div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
div {
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
}
</style>