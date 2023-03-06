import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    selectedOrganizations: [],
    selectedJobTyped: [],
  }),
  actions: {
    userLogin() {
      this.isLoggedIn = true;
    },
    storeSelectedOrganizations(organizations) {
      this.selectedOrganizations = organizations;
    },
    storeSelectJobTyped(jobTyps) {
      this.selectedJobTyped = jobTyps;
    },
  },
});
