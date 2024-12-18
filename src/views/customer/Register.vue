<template>
  <main class="container mx-auto">
    <div class="bg-gray-100 flex items-center justify-center">
      <div class="border border-gray-200 bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2
          class="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800"
        >
          Customer Information
        </h2>
        <form>
          <!-- Branch List -->
          <div class="mb-4">
            <label
              for="branchList"
              class="block text-sm font-medium text-gray-700"
              >Branch Registe</label
            >
            <select
              id="branchList"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-2 text-black"
              required
            >
              <option value="" disabled>Select a branch</option>
              <option
                v-for="branch in branches"
                :key="branch.id"
                :value="branch.id"
              >
                {{ branch.name }}
              </option>
            </select>
          </div>
          <div class="text-lg font-bold mb-2 text-center text-gray-800">
            Branch in FCC
          </div>
          <!-- Name -->
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Full Name</label
            >
            <input
              type="text"
              id="name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-2"
              placeholder="Enter your full name"
              required
            />
          </div>

          <!-- Email -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email Address</label
            >
            <input
              type="email"
              id="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-2"
              placeholder="Enter your email"
              required
            />
          </div>

          <!-- Phone -->
          <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-700"
              >Phone Number</label
            >
            <input
              type="tel"
              id="phone"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-2"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div class="text-lg font-bold mb-2 text-center text-gray-800">
            Login Information
          </div>
          <!-- User name -->
          <div class="mb-4">
            <label
              for="username"
              class="block text-sm font-medium text-gray-700"
              >User name</label
            >
            <input
              type="tel"
              id="username"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-2"
              placeholder="Enter your user name"
              required
            />
          </div>
          <!-- Password -->
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <input
              type="tel"
              id="password"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-2"
              placeholder="Enter your password"
              required
            />
          </div>
          <!-- Confirm pass -->
          <div class="mb-4">
            <label
              for="confirmPassword"
              class="block text-sm font-medium text-gray-700"
              >confirm Password</label
            >
            <input
              type="tel"
              id="confirmPassword"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-2"
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
              Register
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
  </main>
</template>

<script setup>
import { ref } from "vue";
const branches = ref([
  { id: 1, name: "Branch A" },
  { id: 2, name: "Branch B" },
  { id: 3, name: "Branch C" },
]);
</script>

<style></style>
