<template>
  <main class="container mx-auto">
    <div class="bg-gray-100 flex items-center justify-center">
      <div
        class="border border-gray-200 bg-white shadow-md rounded-lg p-8 w-full min-h-screen"
      >
        <h2
          class="flex text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 justify-center"
        >
        {{ $t('customer_information') }}
        </h2>
        <div class="mt-4 overflow-x-auto text-black">
          <table
            class="table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base"
          >
            <thead>
              <tr class="bg-gray-100">
                <th class="border border-gray-300 px-2 sm:px-4 py-2 w-[50px]">
                  {{ $t('stt') }}
                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">                  {{ $t('branch') }}
                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  {{ $t('account_number') }}

                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  {{ $t('user_name') }}
                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  {{ $t('full_name') }}
                  
                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  {{ $t('created_at') }}

                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  {{ $t('maker_id') }}

                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  {{ $t('description') }}
                </th>
                <th class="border border-gray-300 px-2 sm:px-4 py-2">
                  {{ $t('authorize_status') }}
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
                <td class="border border-gray-300 px-2 sm:px-4 py-2">Add New User</td>
                <td class="border border-gray-300 px-2 sm:px-4 py-2">U</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex justify-center py-4 sm:py-2">
          <el-button type="primary">Refresh</el-button>
          <el-button type="primary">Authorize</el-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup></script>
