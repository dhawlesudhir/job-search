<template>
  <header :class="['w-full', 'text-sm', headerHeighClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8 px-8"
      >
        <a :href="url" class="flex h-full items-center text-xl">
          {{ company }}
        </a>
        <h2 class="ml-8 flex h-full items-center">{{ title }}</h2>

        <nav class="fixed right-0 mr-6 h-16">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="ml-5 h-full first:ml-0"
            >
              <a :href="menuItem.url" class="flex h-full items-center py-2.5">{{
                menuItem.title
              }}</a>
            </li>
            <div class="ml-3 flex h-full items-center">
              <profile-image v-if="isLoggedIn" />
              <action-button
                v-else
                text="Sign in"
                type="primary"
                :onclick="userLogin"
              />
            </div>
          </ul>
        </nav>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import SubNav from "@/components/SubNav.vue";

export default {
  name: "Main",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      company: "Aloha Technology",
      title: "DevOnDemand",
      url: "https://www.google.com",
      isLoggedIn: false,
      menuItems: [
        {
          title: "Home",
          url: "/home",
        },
        {
          title: "About",
          url: "/about",
        },
        {
          title: "Contact",
          url: "/contact",
        },
      ],
    };
  },
  computed: {
    headerHeighClass() {
      return {
        "h-16": this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    userLogin() {
      this.isLoggedIn = true;
    },
  },
};
</script>
