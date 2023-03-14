<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton
            text="Cleat Filters"
            type="secondary"
            @click="clear"
          ></ActionButton>
        </div>
      </div>
      <JobFiltersSkills></JobFiltersSkills>
      <!-- <job-filters-sidebar-organization /> -->
      <!-- <job-filters-sidebar-job-typs></job-filters-sidebar-job-typs> -->
      <!-- <job-filters-sidebar-check-box
        header="Job Type"
        :unique-values="jobTypes"
        :action="userStore.storeSelectJobTyped"
      /> -->

      <!-- <job-filters-sidebar-check-box
        header="Organization"
        :unique-values="organizationNames"
        :action="userStore.storeSelectedOrganizations"
      /> -->
      <!-- 
      <job-filters-sidebar-check-box
        header="Degree"
        :unique-values="degreeTypes"
        :action="userStore.storeSelectedDegrees"
      /> -->
    </section>
  </div>
</template>
<script setup>
import ActionButton from "@/components/Shared/ActionButton.vue";
import JobFiltersSidebarCheckBox from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckBox.vue";
import JobFiltersSkills from "@/components/JobResults/JobFiltersSidebar/JobFiltersSkills.vue";
import { useUserStore } from "@/stores/user";
import { useJobsStore } from "@/stores/jobs";
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const jobStore = useJobsStore();
const jobTypes = computed(() => jobStore.getJobTypes);
const organizationNames = computed(() => jobStore.getOrganizationNames);
const degreeTypes = computed(() => jobStore.getDegreeTypes);
const userStore = useUserStore();
onMounted(jobStore.callDegreeApi);
function clear() {
  userStore.clear();
  router.push({ name: "JobResults" });
}
</script>
