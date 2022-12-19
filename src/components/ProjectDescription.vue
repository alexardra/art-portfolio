<template>
<div v-html="description" class="dark"></div>
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
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  white-space:pre-line;
}
</style>