<template>
<div class="d-flex align-items-start flex-direction-column title-container">
  <h3 class="title red">
    {{ title }}
  </h3>
  <div class="d-flex flex-direction-column align-items-start subtitle-container">
    <span class="subtitle dark">
      Role: {{ role }};
    </span>
    <span v-if="author" class="subtitle dark">
      {{ author }}
    </span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
    },
  }
}
</script>

<style scoped>
.title-container {
  row-gap: 8px;
}

.title {
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  margin: 0;
  text-align: left;
}

.subtitle-container {
  row-gap: 4px;
}

.subtitle {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
}
</style>