<template>
  <main class="container mx-auto">
    <div class="bg-gray-100 flex items-center justify-center">
      <div
        class="border border-bg-gray-100 bg-white shadow-md rounded-lg p-8 w-full max-w-xl min-h-screen"
      >
        <h2
          class="flex text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 justify-center"
        >
          Report Customer List
        </h2>
        <div
          class="flex flex-wrap items-center sm:gap-y-4 md:gap-x-6 space-y-4 md:space-y-0 text-black"
        >
          <div class="flex items-center space-x-3">
            <label for="account-select" class="font-medium">Branch:</label>
            <select
              id="account-select"
              class="border rounded px-2 py-1 text-gray-500"
            >
              <option value="account1">Account 1</option>
              <option value="account2">Account 2</option>
              <option value="account3">Account 3</option>
            </select>
          </div>
          <div class="flex items-center space-x-3">
            <label for="account-select" class="font-medium">Custom Type:</label>
            <select
              id="account-select"
              class="border rounded px-2 py-1 text-gray-500"
            >
              <option value="account1">I</option>
              <option value="account2">C</option>
              <option value="account3">B</option>
            </select>
          </div>
          <div class="flex items-center space-x-3">
            <label for="from-date" class="font-medium">From Date:</label>
            <input
              type="date"
              id="from-date"
              class="border rounded px-2 py-1"
            />
          </div>
          <div class="flex items-center space-x-3">
            <label for="to-date" class="font-medium">To Date:</label>
            <input type="date" id="to-date" class="border rounded px-2 py-1" />
          </div>
        </div>
        <div class="flex justify-center py-4 sm:py-2">
          <el-button type="primary">View</el-button>
        </div>
      </div>
    </div>
  </main>
</template>
