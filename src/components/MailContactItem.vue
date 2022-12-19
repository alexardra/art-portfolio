<template>
<button
  :class="color"
>
  <a href="mailto:anniebarbakadze@gmail.com">Contact</a>
</button>  
</template>

<script>
export default {
  computed: {
    color() {
      return this.$root.mode === 'dark' ? 'light' : 'dark'
    }
  }
}
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  padding: 0;
  line-height: 10px;
  font-weight: 600;
}

button:hover {
  color: #FF6666;
}
</style>