<template>
<SideBySide
  align="center"
  spacing="none"
>
  <i v-if="active" class="star-icon"></i>
  <button>
    <router-link :to="to">{{ title }}</router-link>
  </button>
</SideBySide>
</template>

<script>
import SideBySide from '@/core/arrangements/SideBySide.vue'

export default {
  components: {
    SideBySide,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  computed: {
    active() {
      return this.$route.path === this.to
    },
  },
}
</script>

<style scoped>
button {
  background: transparent;
  color: #F6F5EC;
  border: none;
}

button a {
  color: inherit;
  text-decoration: none;
}
.star-icon {
  width: 10px;
  height: 10px;
  background-image: url('@/assets/star-icon.svg');
  background-repeat: no-repeat;
}
</style>