<template>
  <div class="bg-gray-100 flex items-center justify-center">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
      <h2
        class="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800"
      >
        Reset Customer's Password
      </h2>
      <form>
        <div
          class="flex flex-wrap items-center md:gap-x-6 space-y-4 md:space-y-0"
        >
          <div class="flex items-center space-x-3 text-black">
            <label for="from-date" class="font-medium">User Name:</label>
            <input type="text" id="" class="border rounded px-2 py-1" />
          </div>
          <div class="flex items-center space-x-3">
            <el-button type="primary">Check User</el-button>
          </div>
        </div>
        <div class="text-lg font-bold text-center text-black py-4">
          Customer Information
        </div>
        <!-- Name -->
        <div class="flex mb-4">
          <span class="block text-sm font-medium text-black"
            >Branch Registe:</span
          >
          <span class="block text-sm font-medium text-blue-700 px-2">010</span>
        </div>
        <div class="flex mb-4">
          <span class="block text-sm font-medium text-black">CIF:</span>
          <span class="block text-sm font-medium text-blue-700 px-2"
            >010277499</span
          >
        </div>
        <div class="flex mb-4">
          <span class="block text-sm font-medium text-black"
            >Branch in FCC:</span
          >
          <span class="block text-sm font-medium text-blue-700 px-2">010</span>
        </div>
        <div class="flex mb-4">
          <span class="block text-sm font-medium text-gray-700"
            >Full Name:</span
          >
          <span class="block text-sm font-medium text-blue-700 px-2"
            >SOUKPHASONE DOUANGPANYA</span
          >
        </div>
        <div class="flex mb-4">
          <span class="block text-sm font-medium text-black">Create Date:</span>
          <span class="block text-sm font-medium text-blue-700 px-2"
            >12/13/2024 12:00:00 AM</span
          >
        </div>
        <div class="flex mb-4">
          <span class="block text-sm font-medium text-gray-700">Email:</span>
          <span class="block text-sm font-medium text-blue-700 px-2"
            >soukphasone2001@gmail</span
          >
        </div>
        <div class="flex mb-4">
          <span class="block text-sm font-medium text-black">Tel:</span>
          <span class="block text-sm font-medium text-blue-700 px-2"
            >020 9911019</span
          >
        </div>

        <div class="flex mb-4">
          <span class="block text-sm font-medium text-gray-700"
            >Customer Type:</span
          >
          <span class="block text-sm font-medium text-blue-700 px-2">I</span>
        </div>

        <div class="flex mb-4">
          <span class="block text-sm font-medium text-black">Unique ID</span>
          <span class="block text-sm font-medium text-blue-700 px-2"
            >11-0078490</span
          >
        </div>

        <div class="text-lg font-bold mb-2 text-center text-black">
          New Customer's Password
        </div>
        <!-- Password -->
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-black"
            >Password</label
          >
          <input
            type="tel"
            id="password"
            class="border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-2"
            placeholder="Enter your password"
            required
          />
        </div>
        <!-- Confirm pass -->
        <div class="mb-4">
          <label
            for="confirmPassword"
            class="block text-sm font-medium text-black"
            >confirm Password</label
          >
          <input
            type="tel"
            id="confirmPassword"
            class="border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-2"
            placeholder="Enter your confirm password"
            required
          />
        </div>

        <!-- Submit Button -->
        <div class="flex mt-6 gap-x-4">
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset
          </button>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
