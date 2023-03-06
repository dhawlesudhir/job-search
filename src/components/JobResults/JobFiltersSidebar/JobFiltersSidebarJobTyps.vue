<template>
  <CollasibleAccordian header="Job Type">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="jobType in getJobTypes" :key="jobType" class="h-8 w-1/2">
            <input
              :id="jobType"
              :value="jobType"
              v-model="selectedJobTyped"
              type="checkbox"
              class="mr-3"
              @change="selectJobType"
            />
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollasibleAccordian>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "@/stores/user";
import { useJobsStore } from "@/stores/jobs";
import CollasibleAccordian from "@/components/Shared/CollasibleAccordian.vue";
export default {
  name: "JobFiltersSidebarJobTyps",
  components: {
    CollasibleAccordian,
  },
  data() {
    return {
      selectedJobTyped: [],
    };
  },
  computed: {
    ...mapState(useJobsStore, ["getJobTypes"]),
  },
  methods: {
    ...mapActions(useUserStore, ["storeSelectJobTyped"]),
    selectJobType() {
      this.storeSelectJobTyped(this.selectedJobTyped);
      this.$router.push({ name: "JobResult" });
    },
  },
};
</script>
