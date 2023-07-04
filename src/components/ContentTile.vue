<template>
  <div
    class="content"
    :class="{
      top: top,
      right: right,
      bottom: bottom,
      left: left,
    }"
  >
    <button>
      <router-link to="/work/1" :key="$route.path"
        >Check out this work</router-link
      >
    </button>
    <div class="mt-3 small">
      (For now this is a placeholder, each portfolio work
      will be presented here and will have a way to navigate
      to page dedicated to each project)
    </div>
  </div>
</template>

<script>
export default {
  props: {
    top: {
      type: Boolean,
      default: true,
    },
    right: {
      type: Boolean,
      default: true,
    },
    bottom: {
      type: Boolean,
      default: true,
    },
    left: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.content {
  border: 1px solid $dark;
}

.content:hover {
  border: 2px solid $red;
}

.top {
  border-top: 2px solid $dark;
}

.top:hover {
  border-top: 2px solid $red;
}

.right {
  border-right: 2px solid $dark;
}

.right:hover {
  border-right: 2px solid $red;
}

.bottom {
  border-bottom: 2px solid $dark;
}
.bottom:hover {
  border-bottom: 2px solid $red;
}
.left {
  border-left: 2px solid $dark;
}

.left:hover {
  border-left: 2px solid $red;
}

button {
  border: none;
  margin-top: 30px;
}
</style>
