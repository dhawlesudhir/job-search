<template>
  <form
    action=""
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
    @submit.prevent="searchJob"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label for="" class="absolute left-0 -top-10">Role</label>
        <TextInput placeholder="Software engineer" v-model="role"></TextInput>
      </div>

      <span
        class="flex h-full items-center border-r border-l border-brand-gray-3 bg-brand-gray-2 px-3"
      >
        in</span
      >

      <div class="relative flex h-full flex-1 items-center pl-3">
        <label for="" class="absolute -top-10 left-0">Where?</label>
        <TextInput placeholder="Los angels" v-model="joblocaltion"></TextInput>
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl"></action-button>
  </form>
</template>

<script setup>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const role = ref("");
const joblocaltion = ref("");

const router = useRouter();

function searchJob() {
  router.push({
    name: "JobResults",
    query: { role: role.value, location: joblocaltion.value },
  });
}
</script>
