import getJobsData from "@/apis/jobsapi";
import { defineStore } from "pinia";
import { useUserStore } from "@/stores/user";
import type { Job, Degree } from "@/apis/types";
import axios from "axios";

interface JobsState {
  jobs: Job[];
  degrees: Degree[];
}

export const useJobsStore = defineStore("jobs", {
  state: (): JobsState => ({
    jobs: [],
    degrees: [],
  }),
  actions: {
    async runGetJob() {
      this.jobs = await getJobsData();
    },
    async callDegreeApi() {
      //@ts-ignore
      const baseUrl = import.meta.env.VITE_APP_API_URL;
      const url = baseUrl + "/degrees";
      const response = await axios.get(url);
      this.degrees = response.data;
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
      filteredJobs = filteredJobs.length === 0 ? state.jobs : filteredJobs;

      if (userStore.selectedJobTyped.length) {
        filteredJobs = filteredJobs.filter((job) =>
          userStore.selectedJobTyped.includes(job.jobType)
        );
      }
      filteredJobs =
        filteredJobs.length === 0 && !userStore.selectedJobTyped.length
          ? state.jobs
          : filteredJobs;

      if (userStore.selectedDegrees.length) {
        filteredJobs = filteredJobs.filter((job) =>
          userStore.selectedDegrees.includes(job.degree)
        );
        filteredJobs =
          filteredJobs.length === 0 && !userStore.selectedDegrees.length
            ? state.jobs
            : filteredJobs;
      }

      return filteredJobs;
    },
    getJobTypes(state) {
      const jobtypes = new Set<string>();
      state.jobs.forEach((job) => {
        jobtypes.add(job.jobType);
      });
      return jobtypes;
    },
    getDegreeTypes(state) {
      const degrees = new Set<string>();
      state.degrees.forEach((element) => {
        degrees.add(element.degree);
      });
      return degrees;
    },
  },
});
