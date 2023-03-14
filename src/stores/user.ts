import { defineStore } from "pinia";

export interface UserState {
  isLoggedIn: boolean;
  selectedJobTyped: string[];
  selectedOrganizations: string[];
  selectedDegrees: string[];
  skillsSearched: string;
  locationSearched: string;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    isLoggedIn: false,
    selectedOrganizations: [],
    selectedJobTyped: [],
    selectedDegrees: [],
    skillsSearched: "",
    locationSearched: "",
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
      this.skillsSearched = "";
      this.locationSearched = "";
    },
    storeSkillsSearched(skills: string) {
      this.skillsSearched = skills;
    },
    storeLocationSearched(location: string) {
      this.locationSearched = location;
    },
  },
});
