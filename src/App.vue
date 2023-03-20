<script setup>
import { onMounted } from "vue";
import MainNav from "@/components/Navigations/MainNav.vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

// export default {
//   name: "App",
//   components: {
//     MainNav,
//     // TheHero,
//   },
// };

onMounted(() => {
  console.log("HI");
  //should add login funtionality here
  // userStore.userLogin(logindetails);
});
</script>

<template>
  <div class="wrapper">
    <MainNav />
    <!-- <TheHero /> -->
    <router-view></router-view>
  </div>
</template>
