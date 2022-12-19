<template>
<router-link
  :to="to"
>
  <div class="arrangements-stack outer-p align-items-start h-100 position-relative">
    <div class="d-flex justify-center h-100 w-100">
      <img
        class="h-100"
        :alt="preview"
        :src="require(`../assets/previews/${url}`)"
      />
    </div>
    <span class="title">{{ thumbnail }}</span>
  </div>
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
    thumbnail: {
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

<style scoped>
.title {
  position: absolute;
  bottom: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #242424;
  font-family: "aktiv-grotesk-extended", sans-serif;  
}
</style>