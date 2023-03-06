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
<script>
import { mapActions, mapState } from "pinia";
import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";
import CollasibleAccordian from "../../Shared/CollasibleAccordian.vue";
export default {
  name: "JobFiltersSidebarOrgnization",
  components: {
    CollasibleAccordian,
  },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapState(useJobsStore, ["getOrganizationNames"]),
  },
  methods: {
    ...mapActions(useUserStore, ["storeSelectedOrganizations"]),
    selectOrganization() {
      this.storeSelectedOrganizations(this.selectedOrganizations);
    },
  },
};
</script>
