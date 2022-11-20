<template>
<div class="d-flex container align-items-end" :class="{ 'active': active }">
  <i v-if="active" class="star-icon inner-mx"></i>
  <button :class="classes">
    <router-link :to="to" :key="$route.path">{{ title }}</router-link>
  </button>
</div>
</template>

<script>
export default {
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
    classes() {
      const color = this.$root.mode === 'dark' ? 'light' : 'dark'
      return this.active ? [ 'red' ] : [ color ]
    },
  },
}
</script>

<style scoped lang="scss">
$w-icon: 10px;
$h-icon: 10px;
$padding: 4px;
$space: 36px;

.container {
  padding-left: calc($space);
}

.container.active {
  padding-left: calc($space - $padding - $padding - $w-icon);
}

button {
  background: transparent;
  border: none;
  padding: 0;
  line-height: 10px;
}

.star-icon {
  width: $w-icon;
  height: $h-icon;
  margin-bottom: 2px;
  background-image: url('@/assets/star-icon.svg');
  background-repeat: no-repeat;
}
</style>