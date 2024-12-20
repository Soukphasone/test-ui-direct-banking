<template>
  <div class="flex items-center justify-center mt-4">
    <ul class="inline-flex items-center -space-x-px">
      <!-- Previous Button -->
      <li>
        <button
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
          class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
        >
          Previous
        </button>
      </li>

      <!-- Page Numbers -->
      <li v-for="page in visiblePageNumbers" :key="page">
        <button
          @click="goToPage(page)"
          :class="[ 
            'px-3 py-2 leading-tight border border-gray-300',
            currentPage === page
              ? 'text-white bg-blue-500 hover:bg-blue-600'
              : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
          ]"
        >
          {{ page }}
        </button>
      </li>

      <!-- Next Button -->
      <li>
        <button
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
        >
          Next
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "Pagination",
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    modelValue: {
      type: Number,
      default: 1,
    },
    visiblePages: {
      type: Number,
      default: 5, // Number of visible pages
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const currentPage = ref(props.modelValue);

    const totalPages = computed(() =>
      Math.ceil(props.totalItems / props.itemsPerPage)
    );

    const visiblePageNumbers = computed(() => {
      const half = Math.floor(props.visiblePages / 2);
      let start = Math.max(1, currentPage.value - half);
      let end = Math.min(totalPages.value, currentPage.value + half);

      // Adjust start and end if the range is smaller than visiblePages
      if (end - start + 1 < props.visiblePages) {
        if (currentPage.value <= half) {
          end = Math.min(totalPages.value, start + props.visiblePages - 1);
        } else if (currentPage.value + half >= totalPages.value) {
          start = Math.max(1, end - props.visiblePages + 1);
        }
      }

      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    });

    const goToPage = (page: number) => {
      if (page < 1 || page > totalPages.value) return;
      currentPage.value = page;
      emit("update:modelValue", page);
    };

    return {
      currentPage,
      totalPages,
      visiblePageNumbers,
      goToPage,
    };
  },
});
</script>
