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
              @change="selectValues"
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
import { useUserStore } from "@/stores/user";
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

function selectValues() {
  props.action(selectedValues.value);
  router.push({ name: "JobResults" });
}
const userStore = useUserStore();
userStore.$onAction(({ after, name }) => {
  after(() => {
    if (name === "clear") selectedValues.value = [];
  });
});
</script>
