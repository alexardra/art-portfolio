<template>
<router-link
  :to="to"
>
  <img 
    src="@/assets/previews/gaia-preview.svg"
    :alt="preview"
  />
</router-link>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: false,
    },
  },
  computed: {
    to() {
      return `/work/${this.id}`
    },
  },
}
</script>