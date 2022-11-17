<template>
<div class="d-flex container align-items-center" :class="{ 'active': active }">
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
      const color = this.$root.mode === 'light' ? 'dark' : 'light'
      return this.active ? [ 'active', color ] : [ color ]
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
  padding-left: calc($space - $w-icon - $padding);
}

button {
  background: transparent;
  border: none;
  padding:0;
}

.star-icon {
  width: $w-icon;
  height: $h-icon;
  margin-bottom: 2px;
  background-image: url('@/assets/star-icon.svg');
  background-repeat: no-repeat;
}
</style>