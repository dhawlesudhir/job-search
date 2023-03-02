<script>
import MainNav from "@/components/Navigations/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
    // TheHero,
  },
};
</script>

<template>
  <div class="wrapper">
    <MainNav />
    <!-- <TheHero /> -->
    <router-view></router-view>
  </div>
</template>
