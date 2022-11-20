<template>
<div>
  {{ description }}
</div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    }
  }
}
</script>