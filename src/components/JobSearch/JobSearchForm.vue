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
        <text-input placeholder="Software engineer" v-model="role"></text-input>
      </div>

      <span
        class="flex h-full items-center border-r border-l border-brand-gray-3 bg-brand-gray-2 px-3"
      >
        in</span
      >

      <div class="relative flex h-full flex-1 items-center pl-3">
        <label for="" class="absolute -top-10 left-0">Where?</label>
        <text-input
          placeholder="Los angels"
          v-model="joblocaltion"
        ></text-input>
      </div>
    </div>
    <action-button
      text="Search"
      type="secondary"
      class="rounded-r-3xl"
    ></action-button>
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: { ActionButton, TextInput },
  data() {
    return {
      role: "",
      joblocaltion: "",
    };
  },
  methods: {
    testFunction(a) {
      console.log(a);
    },
    searchJob() {
      this.$router.push({
        name: "JobResult",
        query: { role: this.role, location: this.joblocaltion },
      });
    },
  },
};
</script>
