<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }} </span><br />for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Aloha Technology</h2>
  </section>
</template>

<script lang="ts" setup>
import nextElement from "@/utils/nextElement";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

let action = ref("Build");
let intervalObj = ref<ReturnType<typeof setInterval>>();

const actionClasses = computed(() => ({
  [action.value.toLocaleLowerCase()]: true,
}));

function changeAction() {
  intervalObj.value = setInterval(() => {
    const actions = ["Build", "Design", "Create", "Code"];
    action.value = nextElement(actions, action.value);
  }, 2000);
}
onBeforeUnmount(() => {
  clearInterval(intervalObj.value);
});

//this fun call is equilant to created lifecyle hook
changeAction();

//below code in optional API
// export default {
//   name: "TheHeadline",
//   data() {
//     return {
//       action: "Build",
//       intervalObj: null,
//     };
//   },
//   computed: {
//     actionClasses() {
//       return {
//         [this.action.toLocaleLowerCase()]: true,
//       };
//     },
//   },
//   created() {
//     this.changeAction();
//   },
//   beforeUnmount() {
//     clearInterval(this.intervalObj);
//   },
//   methods: {
//     changeAction() {
//       this.intervalObj = setInterval(() => {
//         const actions = ["Build", "Design", "Create", "Code"];
//         this.action = nextElement(actions, this.action);
//       }, 2000);
//     },
//   },
// };
</script>

<style>
.create {
  color: #1a73e8;
}
.code {
  color: #34a853;
}
.design {
  color: #f9ab00;
}

.build {
  color: #d93025;
}
</style>
