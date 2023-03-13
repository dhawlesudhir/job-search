<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job"></job-listing>
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous
          </router-link>

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import JobListing from "@/components/JobResults/JobListing.vue";
import { useJobsStore } from "@/stores/jobs";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import usePreviousAndNextPages from "@/composable/usePreviousAndNextPages";

const route = useRoute();
const jobStore = useJobsStore();
let itemsPerPage = ref(10);

const filteredJobs = computed(() => jobStore.filteredJobs);
const maxPages = computed(() =>
  Math.ceil(filteredJobs.value.length / itemsPerPage.value)
);

const currentPage = computed(() => {
  const currentPage = Number.parseInt(route.query.page || "1");
  return currentPage > maxPages.value ? maxPages.value : currentPage;
});

const { previousPage, nextPage } = usePreviousAndNextPages(currentPage, maxPages);

const displayedJobs = computed(() => {
  let currPage = currentPage.value;
  const startIndex = (currPage - 1) * itemsPerPage.value;
  const endIndex = currPage * itemsPerPage.value;
  return filteredJobs.value.slice(startIndex, endIndex);
});

onMounted(jobStore.runGetJob);

// computed: {
//   ...mapState(useJobsStore, ["filteredJobs"]),
//   currentPage() {
//     const currentPage = Number.parseInt(this.$route.query.page || "1");
//     const maxPages = Math.ceil(this.filteredJobs.length / this.itemsPerPage);
//     return currentPage > maxPages ? maxPages : currentPage;
//   },
//   displayedJobs() {
//     const currentPage = this.currentPage;
//     const startIndex = (currentPage - 1) * this.itemsPerPage;
//     const endIndex = currentPage * this.itemsPerPage;
//     return this.filteredJobs.slice(startIndex, endIndex);
//   },
//   previousPage() {
//     const previousPage = this.currentPage - 1;
//     return previousPage < 1 ? undefined : previousPage;
//   },
//   nextPage() {
//     const nextPage = this.currentPage + 1;
//     const maxPages = Math.ceil(this.filteredJobs.length / this.itemsPerPage);
//     return nextPage > maxPages ? undefined : nextPage;
//   },
// },
// async mounted() {
//   await this.runGetJob();
// },
// methods: {
//   ...mapActions(useJobsStore, ["runGetJob"]),
// },
// };
</script>
