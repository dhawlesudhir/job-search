<template>
  <img :src="imageLink" alt="" class="h-8 w-8" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "../public/face-icon.png",
    };
  },
};
</script>
