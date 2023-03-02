<template>
  <h1>Profile {{ getProfileId }}</h1>
</template>

<script>
export default {
  name: "ProfilePage",
  computed: {
    getProfileId() {
      return this.$route.params.id;
    },
  },
};
</script>
