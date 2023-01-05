<template>
  <router-link :to="to">
    <div
      class="
        arrangements-stack
        outer-p
        align-items-start
        h-100
        position-relative
      "
    >
      <div class="d-flex justify-center h-100 w-100">
        <img
          class="h-100"
          :alt="preview"
          :src="require(`../assets/previews/${url}`)"
        />
      </div>
      <span class="title">{{ thumbnail }}</span>
      <img v-if="blocked" class="icon-block" src="@/assets/block.svg" />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
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
    blocked: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    to() {
      return `/work/${this.id}`;
    },
  },
};
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

.icon-block {
  position: absolute;
  right: 5px;
  bottom: 20px;
}

.outer-p {
  padding: 5px;
}

@media only screen and (min-width: 480px) {
  .outer-p {
    padding: 20px;
  }

  .icon-block {
    right: 20px;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1275px) {
  .title {
    width: 175px;
  }
}
</style>