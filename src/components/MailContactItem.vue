<template>
<button
  @mouseover="onMouseOver(index)"
  :class="classes"
>
  <a href="mailto:anniebarbakadze@gmail.com">Contact</a>
</button>  
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
  computed: {
    classes() {
      return [ 
        this.$root.mode === 'dark' ? 'light' : 'dark',
        this.active ? 'red' : ''
      ]
    },
  },
  methods: {
    onMouseOver() {
      this.active = !this.active
    },
  }
}
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  padding: 0;
  line-height: 10px;
}
</style>