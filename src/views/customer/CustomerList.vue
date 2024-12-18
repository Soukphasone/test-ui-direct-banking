<template>
  <main class="container mx-auto">
    <div class="bg-gray-100 flex items-center justify-center">
    <div
      class="border border-gray-200 bg-white shadow-md rounded-lg p-8 w-full"
    >
      <h2
        class="flex text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 justify-center"
      >
        Customer List
      </h2>
      <div class="mt-4 overflow-x-auto">
        <table
          class="table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base text-black"
        >
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-2 sm:px-4 py-2 w-[50px]">
                STT
              </th>
              <th class="border border-gray-300 px-2 sm:px-4 py-2">
                CIF
              </th>
              <th class="border border-gray-300 px-2 sm:px-4 py-2">Full Name</th>
              <th class="border border-gray-300 px-2 sm:px-4 py-2">Email</th>
              <th class="border border-gray-300 px-2 sm:px-4 py-2">Tel</th>
              <th class="border border-gray-300 px-2 sm:px-4 py-2">Edit</th>
              <th class="border border-gray-300 px-2 sm:px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-2 sm:px-4 py-2">1</td>
              <td class="border border-gray-300 px-2 sm:px-4 py-2">010010490</td>
              <td
                class="border border-gray-300 px-2 sm:px-4 py-2 text-green-600"
              >
              Soukphasone Douangpanya
              </td>
              <td class="border border-gray-300 px-2 sm:px-4 py-2">soukphasone2001@gmail.com</td>
              <td class="border border-gray-300 px-2 sm:px-4 py-2">020 99110019</td>
              <td class="border border-gray-300 px-2 sm:px-4 py-2"></td>
              <td class="border border-gray-300 px-2 sm:px-4 py-2"></td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <!-- <div class="flex justify-center py-4 sm:py-2">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="text-base sm:text-sm xs:text-xs"
      />
    </div> -->
    </div>
    </div>
  </main>
</template>

<script lang="ts" setup></script>
