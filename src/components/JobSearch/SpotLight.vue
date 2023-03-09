<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>
0
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const spotlights = ref([]);

onMounted(async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = baseUrl + "/spotlights";
  const response = await axios.get(url);
  spotlights.value = response.data;
});
</script>
