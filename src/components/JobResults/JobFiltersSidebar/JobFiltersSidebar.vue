<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Cleat Filters" type="secondary"></ActionButton>
        </div>
      </div>
      <CollasibleAccordian header="Organization">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="h-8 w-1/2">
                <input id="youtube" type="checkbox" class="mr-3" />
                <label for="youtube">Company 1</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="youtube1" type="checkbox" class="mr-3" />
                <label for="youtube2">Company 2</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="youtube3" type="checkbox" class="mr-3" />
                <label for="youtube3">Company 3</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="youtube4" type="checkbox" class="mr-3" />
                <label for="youtube4">Company 4</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </CollasibleAccordian>
      <CollasibleAccordian header="Job Type">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="h-8 w-1/2">
                <input id="youtube" type="checkbox" class="mr-3" />
                <label for="youtube">Company 1</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="youtube1" type="checkbox" class="mr-3" />
                <label for="youtube2">Company 2</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="youtube3" type="checkbox" class="mr-3" />
                <label for="youtube3">Company 3</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="youtube4" type="checkbox" class="mr-3" />
                <label for="youtube4">Company 4</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </CollasibleAccordian>
    </section>
  </div>
</template>
<script>
import ActionButton from "../../Shared/ActionButton.vue";
import CollasibleAccordian from "../../Shared/CollasibleAccordian.vue";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    CollasibleAccordian,
  },
};
</script>
