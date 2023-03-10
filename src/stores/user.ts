import { defineStore } from "pinia";

export interface UserState {
  isLoggedIn: boolean;
  selectedJobTyped: string[];
  selectedOrganizations: string[];
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    isLoggedIn: false,
    selectedOrganizations: [],
    selectedJobTyped: [],
  }),
  actions: {
    userLogin() {
      this.isLoggedIn = true;
    },
    storeSelectedOrganizations(organizations: string[]) {
      this.selectedOrganizations = organizations;
    },
    storeSelectJobTyped(jobTyps: string[]) {
      this.selectedJobTyped = jobTyps;
    },
  },
});
