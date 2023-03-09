<template>
  <CollasibleAccordian header="Organization">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in getOrganizationNames"
            :key="organization"
            class="h-8 w-1/2"
          >
            <input
              :id="organization"
              :value="organization"
              v-model="selectedOrganizations"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollasibleAccordian>
</template>
<script setup>
import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";
import CollasibleAccordian from "../../Shared/CollasibleAccordian.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const selectedOrganizations = ref([]);
const router = useRouter();
const userStore = useUserStore();
const jobStore = useJobsStore();

const getOrganizationNames = computed(() => jobStore.getOrganizationNames);

function selectOrganization() {
  userStore.storeSelectedOrganizations(selectedOrganizations.value);
  router.push({ name: "JobResults" });
}
</script>
