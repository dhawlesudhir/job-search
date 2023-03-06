<template>
  <div class="h-16 w-full border-0 border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div>
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="text-brand-green-1">{{ filteredJobs.length }}</span> jobs
          matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useJobsStore } from "@/stores/jobs";
import { mapState } from "pinia";
export default {
  name: "SubNav",
  computed: {
    ...mapState(useJobsStore, ["filteredJobs"]),
  },
};
</script>
