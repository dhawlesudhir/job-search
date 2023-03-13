import getJobsData from "@/apis/jobsapi";
import { defineStore } from "pinia";
import { useUserStore } from "@/stores/user";
import type { Job } from "@/apis/types";
import axios from "axios";

interface JobsState {
  jobs: Job[];
}

export const useJobsStore = defineStore("jobs", {
  state: (): JobsState => ({
    jobs: [],
  }),
  actions: {
    async runGetJob() {
      this.jobs = await getJobsData();
    },
  },
  getters: {
    getOrganizationNames(state) {
      const organizationNames = new Set<string>();
      state.jobs.forEach((job) => {
        organizationNames.add(job.organization);
      });
      return organizationNames;
    },
    filteredJobs(state) {
      const userStore = useUserStore();
      let filteredJobs: Job[] = [];

      if (userStore.selectedOrganizations.length) {
        filteredJobs = state.jobs.filter((job) =>
          userStore.selectedOrganizations.includes(job.organization)
        );
      }

      let tempFilteredJobs: Job[] =
        filteredJobs.length === 0 ? state.jobs : filteredJobs;

      if (userStore.selectedJobTyped.length) {
        filteredJobs = tempFilteredJobs.filter((job) =>
          userStore.selectedJobTyped.includes(job.jobType)
        );
        filteredJobs =
          filteredJobs.length === 0 ? tempFilteredJobs : filteredJobs;
      }

      return filteredJobs.length === 0 ? state.jobs : filteredJobs;
    },
    getJobTypes(state) {
      const jobtypes = new Set<string>();
      state.jobs.forEach((job) => {
        jobtypes.add(job.jobType);
      });
      return jobtypes;
    },
    async getDegreeTypes(state) {
      const baseUrl = import.meta.env.VITE_APP_API_URL;
      const url = baseUrl + "/degrees";
      const response = await axios.get(url);
      return response.data;
    },
  },
});
