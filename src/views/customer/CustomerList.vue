<template>
  <h2
    class="flex text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 justify-center"
  >
    Customer List
  </h2>
    <div class="mt-4 overflow-x-auto">
      <table class="table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-2 sm:px-4 py-2 w-[50px]">STT</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Description</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Amount</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Balance</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Amount</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Balance</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Amount</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">1</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">Deposit</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2 text-green-600">+ $1,000</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">$5,000</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2 text-green-600">+ $1,000</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">$5,000</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2 text-green-600">+ $1,000</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">$5,000</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">2</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">Withdrawal</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2 text-red-600">- $500</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">$4,500</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2 text-red-600">- $500</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">$4,500</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2 text-red-600">- $500</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">$4,500</td>
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
</template>

<script lang="ts" setup>
</script>
