import { defineStore } from "pinia";

export interface UserState {
  isLoggedIn: boolean;
  selectedJobTyped: string[];
  selectedOrganizations: string[];
  selectedDegrees: string[];
  skillsSearched: string;
  locationSearched: string;
  loginId: Object;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    isLoggedIn: false,
    selectedOrganizations: [],
    selectedJobTyped: [],
    selectedDegrees: [],
    skillsSearched: "",
    locationSearched: "",
    loginId: {},
  }),
  actions: {
    async userLogin(id: string) {
      this.loginId = await id;
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
