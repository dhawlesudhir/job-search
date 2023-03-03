<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="hover:shadow-gray mx-auto block rounded border border-solid border-brand-gray-2 bg-white"
    >
      <div class="mx-8 border-b border-solid border-brand-gray-2 pt-2 pb-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
        </div>
        <div class="flex">
          <span v-for="location in job.locations" class="mr-5 inline-block">{{
            location
          }}</span>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-3">Qualifications:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link :to="jobPageLink" class="text=brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      required: false,
    },
  },
  computed: {
    jobPageLink() {
      return "/job/results/" + this.job.id;
    },
  },
};
</script>
