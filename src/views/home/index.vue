<template>
  <main class="container mx-auto">
    <div class="bg-gray-100 flex items-center justify-center">
      <div
        class="border border-gray-200 bg-white shadow-md rounded-lg p-8 w-full min-h-screen"
      >
        <h2
          class="flex text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 justify-center text-center"
        >
          {{ $t("welcome") }}
        </h2>
        <div class="text-blue-900 mb-6">{{ $t("name") }}: Admin</div>
        <!-- Search Section -->
        <div
          class="flex flex-wrap items-center text-black md:gap-x-6 space-y-4 md:space-y-0"
        >
          <div class="flex items-center space-x-3">
            <label for="account-select" class="font-medium"
              >{{ $t("account") }}:</label
            >
            <select
              id="account-select"
              class="border rounded px-2 py-1 text-gray-500"
            >
              <option value="" disabled selected>Select account</option>
              <option value="account1">Account 1</option>
              name
              <option value="account2">Account 2</option>
              <option value="account3">Account 3</option>
            </select>
          </div>
          <div class="flex items-center space-x-3">
            <label for="from-date" class="font-medium"
              >{{ $t("from_date") }}:</label
            >
            <input
              type="date"
              id="from-date"
              class="border rounded px-2 py-1"
            />
          </div>
          <div class="flex items-center space-x-3">
            <label for="to-date" class="font-medium"
              >{{ $t("to_date") }}:</label
            >
            <input type="date" id="to-date" class="border rounded px-2 py-1" />
          </div>
          <div class="flex items-center space-x-3">
            <el-button type="primary">Search</el-button>
          </div>
        </div>

        <div class="mb-6 py-6 text-black">{{ $t("balance") }}:</div>

        <!-- Results Table list -->
        <div class="mt-4 overflow-x-auto text-black">
          <table
            class="table-auto w-full border-collapse rounded-md text-sm sm:text-base"
          >
            <thead>
              <tr class="bg-gray-800 text-white">
                <th
                  class="px-2 sm:px-4 py-2 text-center"
                >
                  DATE
                </th>
                <th
                  class="px-2 sm:px-4 py-2 text-center"
                >
                  TRAN.NO
                </th>
                <th class="px-2 sm:px-4 py-2 text-center">
                  DESCRIPTION
                </th>
                <th
                  class="px-2 sm:px-4 py-2 text-center"
                >
                  WITHDRAW
                </th>
                <th
                  class="px-2 sm:px-4 py-2 text-center"
                >
                  DEPOSIT
                </th>
                <th
                  class="px-2 sm:px-4 py-2 text-center"
                >
                  BALANCE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-gray-100">
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  22/10/2024 14:21:37
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  010CHDP242960040
                </td>
                <td class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center">
                  Cash Deposit BY SOUKPHASONE DOUANGPANYA
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  0
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  50,000
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  50,000
                </td>
              </tr>
              <tr class="hover:bg-gray-100">
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  22/10/2024 14:21:37
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  010CHDP242960040
                </td>
                <td class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center">
                  Cash Deposit BY SOUKPHASONE DOUANGPANYA
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  0
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  50,000
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  50,000
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup></script>
