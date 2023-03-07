<template>
  <CollasibleAccordian :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="value in uniqueValues" :key="value" class="h-8 w-1/2">
            <input
              :id="value"
              :value="value"
              v-model="selectedValues"
              type="checkbox"
              class="mr-3"
              @change="selectJobType"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollasibleAccordian>
</template>
<script setup>
import CollasibleAccordian from "@/components/Shared/CollasibleAccordian.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const selectedValues = ref([]);

const props = defineProps({
  header: {
    type: String,
    required: false,
  },
  uniqueValues: {
    type: Set,
    required: false,
  },
  action: {
    type: Function,
    required: false,
  },
});

function selectJobType() {
  props.action(selectedValues.value);
  router.push({ name: "JobsResult" });
}
</script>
