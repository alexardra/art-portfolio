<template>
  <div class="d-flex justify-between">
    <button
      @click="goToPrev"
      class="dark"
      type="submit"
      :disabled="prevDisabled"
    >
      &lt; Previous Project
    </button>
    <button
      @click="goToNext"
      class="dark"
      type="submit"
      :disabled="nextDisabled"
    >
      Next Project &gt;
    </button>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pagesCount: 0,
    };
  },
  created() {
    const isBlockedPageEnabled = window.localStorage.getItem("enabled");
    this.pagesCount = isBlockedPageEnabled ? 7 : 5;
  },
  computed: {
    prevDisabled() {
      return this.current === 1;
    },
    nextDisabled() {
      return this.current >= this.pagesCount;
    },
  },
  methods: {
    goToPrev() {
      this.$router.push({
        path: `/work/${this.current - 1}`,
      });
    },
    goToNext() {
      this.$router.push({
        path: `/work/${this.current + 1}`,
      });
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 30px;
}

button {
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  outline: none;
  background: inherit;
  border: 0;
  padding: 0;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

button:disabled {
  color: #bfbebe;
}

@media only screen and (min-width: 600px) {
  button {
    font-size: 14px;
  }
}
</style>