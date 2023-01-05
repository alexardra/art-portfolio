<template>
  <div v-html="description" class="dark"></div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
div {
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: left;
  white-space: pre-line;
}

@media only screen and (min-width: 600px) {
  div {
    font-size: 12px;
    line-height: 15px;
  }
}
</style>