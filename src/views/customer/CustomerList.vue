<template>
  <main class="container mx-auto">
    <div class="bg-gray-100 flex items-center justify-center">
      <div
        class="border border-gray-200 bg-white shadow-md rounded-lg p-8 w-full min-h-screen"
      >
        <h2
          class="flex text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 justify-center"
        >
          {{ $t("customer_list") }}
        </h2>
        <div class="mt-4 overflow-x-auto">
          <table
            class="table-auto w-full border-collapse text-sm sm:text-base text-black"
          >
            <thead>
              <tr class="bg-blue-500 text-white">
                <th class="px-2 sm:px-4 py-2 w-[100px]">
                  {{ $t("stt") }}
                </th>
                <th class="px-2 sm:px-4 py-2">
                  {{ $t("account_number") }}
                </th>
                <th class="px-2 sm:px-4 py-2">
                  {{ $t("full_name") }}
                </th>
                <th class="px-2 sm:px-4 py-2">
                  {{ $t("email") }}
                </th>
                <th class="px-2 sm:px-4 py-2">
                  {{ $t("tel") }}
                </th>
                <th class="px-2 sm:px-4 py-2">
                  {{ $t("edit") }}
                </th>
                <th class="px-2 sm:px-4 py-2">
                  {{ $t("delete") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="hover:bg-gray-100"
                v-for="(customer, index) in paginatedCustomers"
                :key="customer.id"
              >
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  {{ index + 1 + (currentPage - 1) * itemsPerPage }}
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  {{ customer.accountNumber }}
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  {{ customer.fullname }}
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  {{ customer.email }}
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  {{ customer.tel }}
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  <button class="text-blue-500 hover:underline">
                    {{ $t("edit") }}
                  </button>
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  <button class="text-red-500 hover:underline">
                    {{ $t("delete") }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <pagination
            :totalItems="customerList.length"
            :itemsPerPage="itemsPerPage"
            :visiblePages="3"
            v-model="currentPage"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { customerList } from "@/constant/dataTest";
import Pagination from "@/components/Pagination.vue";

const currentPage = ref(1);
const itemsPerPage = 5;

// Computed property for paginated customers
const paginatedCustomers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return customerList.slice(start, end);
});
</script>
