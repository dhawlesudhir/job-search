import getJobsData from "@/apis/jobsapi";
import { defineStore } from "pinia";
import { useUserStore } from "@/stores/user";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async runGetJob() {
      this.jobs = await getJobsData();
    },
  },
  getters: {
    getOrganizationNames(state) {
      const organizationNames = new Set();
      state.jobs.forEach((job) => {
        organizationNames.add(job.organization);
      });
      return organizationNames;
    },
    filteredJobs(state) {
      const userStore = useUserStore();
      let filteredJobs = [];

      if (userStore.selectedOrganizations.length) {
        filteredJobs = state.jobs.filter((job) =>
          userStore.selectedOrganizations.includes(job.organization)
        );
      }

      let tempFilteredJobs =
        filteredJobs.length === 0 ? state.jobs : filteredJobs;

      if (userStore.selectedJobTyped.length) {
        filteredJobs = tempFilteredJobs.filter((job) =>
          userStore.selectedJobTyped.includes(job.jobType)
        );
        filteredJobs =
          filteredJobs.length === 0 ? tempFilteredJobs.length : filteredJobs;
      }

      return filteredJobs.length === 0 ? state.jobs : filteredJobs;
    },
    getJobTypes(state) {
      const jobtypes = new Set();
      state.jobs.forEach((job) => {
        jobtypes.add(job.jobType);
      });
      return jobtypes;
    },
  },
});
