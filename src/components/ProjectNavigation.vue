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
// TODO: remove hardcoded block
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
      blocked: false,
    };
  },
  created() {
    this.blocked = !window.localStorage.getItem("enabled");
    this.pagesCount = 8
  },
  computed: {
    prevDisabled() {
      return this.current === 1;
    },
    nextDisabled() {
      return this.current === this.pagesCount;
    },
    nextEnabledPage() {
      // just ew
      return this.blocked && this.current === 2 ? 4 : this.current + 1
    },
    prevEnabledPage() {
      return this.blocked && this.current === 4 ? 2 : this.current - 1
    }
  },
  methods: {
    goToPrev() {
      this.$router.push({
        path: `/work/${this.prevEnabledPage}`,
      });
    },
    goToNext() {
      this.$router.push({
        path: `/work/${this.nextEnabledPage}`,
      });
    },
  },
};
</script>

<style scoped>
button {
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  outline: none;
  background: inherit;
  border: 0;
  padding: 0;
  cursor: pointer;
  margin-bottom: 15px;
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