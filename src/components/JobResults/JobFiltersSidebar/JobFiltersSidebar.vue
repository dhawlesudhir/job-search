<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Cleat Filters" type="secondary"></ActionButton>
        </div>
      </div>

      <!-- <job-filters-sidebar-organization /> -->
      <!-- <job-filters-sidebar-job-typs></job-filters-sidebar-job-typs> -->
      <job-filters-sidebar-check-box
        header="Job Type"
        :uniqueValues="jobTypes"
        :action="userStore.storeSelectJobTyped"
      ></job-filters-sidebar-check-box>

      <job-filters-sidebar-check-box
        header="Organization"
        :uniqueValues="organizationNames"
        :action="userStore.storeSelectedOrganizations"
      ></job-filters-sidebar-check-box>
    </section>
  </div>
</template>
<script setup>
import ActionButton from "@/components/Shared/ActionButton.vue";
import JobFiltersSidebarOrganization from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganization.vue";
import JobFiltersSidebarJobTyps from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTyps.vue";
import JobFiltersSidebarCheckBox from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckBox.vue";
import { useUserStore } from "@/stores/user.js";
import { useJobsStore } from "@/stores/jobs.js";
import { computed } from "vue";

const jobStore = useJobsStore();
const jobTypes = computed(() => jobStore.getJobTypes);
const organizationNames = computed(() => jobStore.getOrganizationNames);

const userStore = useUserStore();
</script>
