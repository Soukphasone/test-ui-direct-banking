<template>
  <main class="container mx-auto">
    <div class="bg-gray-100 flex items-center justify-center">
      <div
        class="border border-gray-200 bg-white shadow-md rounded-lg p-8 w-full max-w-lg"
      >
        <h2
          class="flex justify-center text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-black"
        >
          {{ $t('change_password') }}
        </h2>
        <form>
          <!--Old Password -->
          <div class="mb-4">
            <label
              for="username"
              class="block text-sm font-medium text-black"
              >{{ $t('password') }}</label
            >
            <input
              type="tel"
              id="username"
              class="border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-2"
              placeholder="Enter your user name"
              required
            />
          </div>
          <!-- Password -->
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-black"
              >{{ $t('password') }}</label
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
              >{{ $t('confirm_password') }}</label
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
</script>

