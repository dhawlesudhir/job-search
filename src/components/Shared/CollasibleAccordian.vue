<template>
  <div class="boarder-b border-solid border-brand-gray-2 py-5">
    <div class="flex cursor-pointer flex-wrap items-center justify-between" @click="open">
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

// commented code is option API

// export default {
// name: "CollasibleAccordian",
// props: {
//   header: {
//     type: String,
//     required: false,
//   },
// },

defineProps({
  header: {
    type: String,
    required: false,
  },
});

// data() {
//   return { isOpen: false };
// },

const isOpen = ref(false);

// computed: {
//   caretIcon() {
//     return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
//   },
// },

const caretIcon = computed(() => {
  return isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"];
});

// methods: {
//   open() {
//     this.isOpen = !this.isOpen;
//   },
// },

function open() {
  isOpen.value = !isOpen.value;
}

// };
</script>
