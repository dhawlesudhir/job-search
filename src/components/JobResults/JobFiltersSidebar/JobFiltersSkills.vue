<template>
  <div class="mt-2">
    <input
      type="text"
      v-model.trim="updateSelectedSkills"
      placeholder="Computer programmin, MBA"
      class="shadow-gray h-12 w-full rounded border border-solid border-brand-gray-1 p-3 text-base"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { useRoute } from "vue-router";
const userStore = useUserStore();
// const skills = ref("");
const route = useRoute();
const updateSelectedSkills = computed({
  get() {
    return userStore.skillsSearched;
  },
  set(value) {
    userStore.storeSkillsSearched(value);
  },
});
onMounted(() => {
  if (route.query.location) {
    userStore.storeLocationSearched(route.query.location);
  }
  if (route.query.role) {
    updateSelectedSkills.value = route.query.role;
  }
});
</script>
