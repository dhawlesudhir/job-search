<template>
  <input
    type="text"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleEvent"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modalValue"],
  methods: {
    handleEvent($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
