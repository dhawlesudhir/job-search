<template>
  <div class="h-16 w-full border-0 border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="text-brand-green-1">{{ filteredJobs.length }}</span>
          jobs matched</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useJobsStore } from "@/stores/jobs";
// import { mapState } from "pinia";

const route = useRoute();
const jobStore = useJobsStore();

// computed: {
//   // ...mapState(useJobsStore, ["filteredJobs"]),
//   // onJobResultPage() {
//   //   return this.$route.name === "JobResult";
//   // },
// },

const onJobResultPage = computed(() => {
  return route.name === "JobResult";
});

const filteredJobs = computed(() => {
  return jobStore.filteredJobs;
});
</script>
