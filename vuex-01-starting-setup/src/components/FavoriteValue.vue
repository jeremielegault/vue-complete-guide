<template>
  <div>
    <p>Favorite Value</p>
    <h3>{{ counter }}</h3>
    <p>we do more</p>
  </div>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
