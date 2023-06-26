<template>
  <div class="d-flex container align-items-center" :class="{ active: active }">
    <i v-if="active" class="star-icon inner-mx"></i>
    <button :class="classes" :style="active ? 'font-weight: 700;' : ''">
      <router-link v-if="!external" :to="to" :key="$route.path">
        {{ title }}
      </router-link>
      <a v-else target="_blank" :href="to">{{ title }} </a>
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
    external: {
      type: Boolean,
      default: false,
    },
    bold: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    active() {
      return this.$route.path === this.to;
    },
    classes() {
      const cls = this.bold ? ["bold"] : [];
      const color = this.$root.mode === "dark" ? "light" : "dark";

      return this.active ? [...cls, "red"] : [...cls, color];
    },
  },
};
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
  line-height: 12px;
  font-weight: 400;
  font-size: 14px;
}

button:hover {
  color: #ff6666;
}

.star-icon {
  width: $w-icon;
  height: $h-icon;
  background-image: url("@/assets/star-icon.svg");
  background-repeat: no-repeat;
}

.bold {
  font-weight: 600;
}

@media only screen and (max-width: 600px) {
  .star-icon {
    display: none;
  }

  .container,
  .container.active {
    padding-left: 18px;
  }

  button {
    line-height: 10px;
    font-size: 12px;
  }
}
</style>
