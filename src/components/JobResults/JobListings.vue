<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        key="job.id"
        :job="job"
      ></job-listing>
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">
          Page {{ currentPage }}
          {{ previousPage }}
        </p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResult', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous
          </router-link>
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResult', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import JobListing from "@/components/JobResults/JobListing.vue";
import axios from "axios";

export default {
  name: "JobListings",
  data() {
    return {
      jobs: [],
      itemsPerPage: 10,
    };
  },
  computed: {
    currentPage() {
      const currentPage = Number.parseInt(this.$route.query.page || "1");
      const maxPages = this.jobs.length / this.itemsPerPage;
      return currentPage > maxPages ? maxPages : currentPage;
    },
    displayedJobs() {
      const currentPage = this.currentPage;
      const startIndex = (currentPage - 1) * this.itemsPerPage;
      const endIndex = currentPage * this.itemsPerPage;
      return this.jobs.slice(startIndex, endIndex);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      return previousPage < 1 ? undefined : previousPage;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPages = this.jobs.length / this.itemsPerPage;
      return nextPage > maxPages ? undefined : nextPage;
    },
  },
  components: {
    JobListing,
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
  },
};
</script>
