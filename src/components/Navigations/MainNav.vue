<template>
  <header :class="['w-full', 'text-sm', headerHeighClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8 px-8"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl"
          >{{ company }}</router-link
        >
        <h2 class="ml-8 flex h-full items-center">{{ title }}</h2>

        <nav class="fixed right-0 mr-6 h-16">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="ml-5 h-full first:ml-0"
            >
              <router-link
                :to="{ name: menuItem.url }"
                class="flex h-full items-center py-2.5"
                >{{ menuItem.title }}</router-link
              >
            </li>
            <div class="ml-3 flex h-full items-center">
              <profile-image v-if="userStore.isLoggedIn" />
              <action-button
                v-else
                text="Sign in"
                type="primary"
                :onclick="userStore.userLogin"
              />
            </div>
          </ul>
        </nav>
      </div>
      <sub-nav v-if="userStore.isLoggedIn" />
    </div>
  </header>
</template>

<script setup>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigations/ProfileImage.vue";
import SubNav from "@/components/Navigations/SubNav.vue";
// import { mapState, mapActions } from "pinia";
import { useUserStore } from "@/stores/user";
import { ref, computed } from "vue";

const company = ref("Aloha Technology");
const title = ref("DevOnDemand");
const menuItems = ref([
  {
    title: "Home",
    url: "Home",
  },
  {
    title: "Jobs",
    url: "JobResults",
  },
  {
    title: "Profiles",
    url: "AvailableProfiles",
  },
  {
    title: "Team",
    url: "TeamsView",
  },
  {
    title: "About",
    url: "AboutPage",
  },
]);

const userStore = useUserStore();
const headerHeighClass = computed(() => ({
  "h-16": !userStore.isLoggedIn,
  "h-32": userStore.isLoggedIn,
}));
</script>
