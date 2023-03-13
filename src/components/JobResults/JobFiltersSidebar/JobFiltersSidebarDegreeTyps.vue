<template>
  <CollasibleAccordian header="Degree">
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
<script setup>

import CollasibleAccordian from "@/components/Shared/CollasibleAccordian.vue";
import { useUserStore } from "@/stores/user";
import { useJobsStore } from "@/stores/jobs";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const degreeTypes = ref([]);

const router = useRouter();
const jobStore = useJobsStore();
const userStore = useUserStore();

onMounted(()=>{
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = baseUrl.'/degrees';
  const responseData = axios.get(url);
  const degreeTypes = responseData.data;
});

console.log(degreeTypes.value);
</script>
