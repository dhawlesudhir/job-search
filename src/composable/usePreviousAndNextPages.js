import { computed } from "vue";

const usePreviousAndNextPages = (currentPage, maxPages) => {
  const previousPage = computed(() => {
    const previousPage = currentPage.value - 1;
    return previousPage < 1 ? undefined : previousPage;
  });

  const nextPage = computed(() => {
    const nextPage = currentPage.value + 1;
    return nextPage > maxPages.value ? undefined : nextPage;
  });

  return { previousPage, nextPage };
};

export default usePreviousAndNextPages;
