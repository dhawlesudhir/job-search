import getJobsData from "@/apis/jobsapi";
import { defineStore } from "pinia";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async runGetJob() {
      this.jobs = await getJobsData();
    },
  },
});
