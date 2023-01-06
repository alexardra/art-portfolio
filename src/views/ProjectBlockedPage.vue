<template>
  <div class="outer-p main justify-center">
    <form @submit.prevent="checkPass">
      <img src="@/assets/block.png" />
      <span>Enter Password to open</span>
      <div class="block-input-container">
        <input type="password" v-model="password" />
        <button type="submit">
          <i class="icon-submit"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-debugger */
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    checkPass() {
      if (this.password != "bowie") {
        this.password = "";
        return;
      }

      window.localStorage.setItem("enabled", true);
      this.$router.push({
        path: `/work/${this.$route.params.id}`,
      });
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
}

form img {
  width: 22px;
  height: 26px;
}

form span {
  width: 184px;
  height: 18px;
  font-size: 14px;
  line-height: 18px;
  color: #242424;
}

.block-input-container {
  border: 1px solid #242424;
  display: flex;
}

.block-input-container input {
  background: inherit;
  border: none;
  outline: none;
  width: 160px;
  height: 26px;
}

.block-input-container button {
  width: 26px;
  height: 26px;
  background: inherit;
  border: none;
  outline: none;
  border-left: 1px solid #242424;
}

.icon-submit {
  background-image: url("@/assets/icon-submit.svg");
  background-size: cover;
  display: inline-block;
  width: 8px;
  height: 14px;
  margin-top: 3px;
}
</style>