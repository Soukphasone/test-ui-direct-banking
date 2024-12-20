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
        <li v-for="page in totalPages" :key="page">
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
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
      const currentPage = ref(props.modelValue);
  
      const totalPages = computed(() =>
        Math.ceil(props.totalItems / props.itemsPerPage)
      );
  
      const goToPage = (page: number) => {
        if (page < 1 || page > totalPages.value) return;
        currentPage.value = page;
        emit("update:modelValue", page);
      };
  
      return {
        currentPage,
        totalPages,
        goToPage,
      };
    },
  });
  </script>
  