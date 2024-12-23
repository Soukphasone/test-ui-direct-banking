<template>
  <main class="container mx-auto">
    <div class="bg-gray-100 flex items-center justify-center">
      <div
        class="border border-gray-200 bg-white shadow-md rounded-lg p-8 w-full min-h-screen"
      >
        <h2
          class="flex text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 justify-center"
        >
          User List
        </h2>
        <div class="mt-4 overflow-x-auto">
          <table
            class="table-auto w-full text-sm sm:text-base text-black"
          >
            <thead>
              <tr class="text-white">
                <th class="px-2 sm:px-4 py-2 w-[50px]">
                  STT
                </th>
                <th class="px-2 sm:px-4 py-2">
                  Full Name
                </th>
                <th class="px-2 sm:px-4 py-2">Tel</th>
                <th class="px-2 sm:px-4 py-2">Email</th>
                <th class="px-2 sm:px-4 py-2">Role</th>
                <th class="px-2 sm:px-4 py-2">Edit</th>
                <th class="px-2 sm:px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-gray-100">
                <td class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center">1</td>
                <td class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center">
                  Soukphasone Douangpanya
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  020 99110019
                </td>
                <td class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center">
                  soukphasone2001@gmail.com
                </td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                  Admin
                </td>
                <td class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center">Edit</td>
                <td
                  class="border-b-4 border-b-gray-200 px-2 sm:px-4 py-4 text-center"
                >
                Delete
                </td>
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
