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
              <option value="" disabled selected>Select account name</option>
              <option value="account1">Account 1</option>
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

        <!-- Results Section -->
        <!-- <div class="mt-4 overflow-x-auto text-black">
          <table
            class="table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base"
          >
            <thead>
              <tr class="bg-gray-100">
                <th class="border border-gray-300 px-2 sm:px-4 py-2 w-[50px]">
                  STT
                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">Branch</th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  Customer ID
                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  User Name
                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  Full Name
                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  Create Date
                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  Maker ID
                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  Description
                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  Authorize Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-2 sm:px-4 py-2">1</td>
                <td class="border border-gray-300 px-2 sm:px-4 py-2">010</td>
                <td class="border border-gray-300 px-2 sm:px-4 py-2">
                  010265044
                </td>
                <td class="border border-gray-300 px-2 sm:px-4 py-2">
                  CIVIL AND BUILDING CONTRACTOR LAO SOLE CO LTD
                </td>
                <td class="border border-gray-300 px-2 sm:px-4 py-2">
                  CIVIL AND BUILDING CONTRACTOR LAO SOLE CO LTD
                </td>
                <td class="border border-gray-300 px-2 sm:px-4 py-2">
                  03/05/2024
                </td>
                <td
                  class="border border-gray-300 px-2 sm:px-4 py-2 text-green-600"
                >
                  012INTHAVA
                </td>
                <td class="border border-gray-300 px-2 sm:px-4 py-2">
                  Add New User
                </td>
                <td class="border border-gray-300 px-2 sm:px-4 py-2">U</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex justify-center py-4 sm:py-2">
          <el-button type="primary">Refresh</el-button>
          <el-button type="primary">Authorize</el-button>
        </div> -->
      </div>
    </div>
  </main>
</template>
<script setup>
</script>