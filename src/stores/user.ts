import { defineStore } from "pinia";

export interface UserState {
  isLoggedIn: boolean;
  selectedJobTyped: string[];
  selectedOrganizations: string[];
  selectedDegrees: string[];
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    isLoggedIn: false,
    selectedOrganizations: [],
    selectedJobTyped: [],
    selectedDegrees: [],
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
    storeSelectedDegrees(degrees: string[]) {
      this.selectedDegrees = degrees;
    },
    clear() {
      this.selectedOrganizations = [];
      this.selectedJobTyped = [];
      this.selectedDegrees = [];
      console.log("cleared");
    },
  },
});
