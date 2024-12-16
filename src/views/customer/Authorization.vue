<template>
  <h2
    class="flex text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 justify-center"
  >
    Customer Information
  </h2>
  <div class="mt-4 overflow-x-auto">
    <table
      class="table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base"
    >
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 px-2 sm:px-4 py-2 w-[50px]">STT</th>
          <th class="border border-gray-300 px-2 sm:px-4 py-2">Branch</th>
          <th class="border border-gray-300 px-2 sm:px-4 py-2">Customer ID</th>
          <th class="border border-gray-300 px-2 sm:px-4 py-2">User Name</th>
          <th class="border border-gray-300 px-2 sm:px-4 py-2">Full Name</th>
          <th class="border border-gray-300 px-2 sm:px-4 py-2">Create Date</th>
          <th class="border border-gray-300 px-2 sm:px-4 py-2">Maker ID</th>
          <th class="border border-gray-300 px-2 sm:px-4 py-2">Description</th>
          <th class="border border-gray-300 px-2 sm:px-4 py-2">
            Authorize Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-2 sm:px-4 py-2">1</td>
          <td class="border border-gray-300 px-2 sm:px-4 py-2">Deposit</td>
          <td class="border border-gray-300 px-2 sm:px-4 py-2 text-green-600">
            + $1,000
          </td>
          <td class="border border-gray-300 px-2 sm:px-4 py-2">$5,000</td>
          <td class="border border-gray-300 px-2 sm:px-4 py-2 text-green-600">
            + $1,000
          </td>
          <td class="border border-gray-300 px-2 sm:px-4 py-2">$5,000</td>
          <td class="border border-gray-300 px-2 sm:px-4 py-2 text-green-600">
            + $1,000
          </td>
          <td class="border border-gray-300 px-2 sm:px-4 py-2">$5,000</td>
          <td class="border border-gray-300 px-2 sm:px-4 py-2">$5,000</td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center py-4 sm:py-2">
      <el-button type="primary">Refresh</el-button>
      <el-button type="primary">Authorize</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElTable } from "element-plus";

interface User {
  date: string;
  name: string;
  address: string;
}
const tableData: User[] = [
  {
    date: "2016-05-04",
    name: "Aleyna Kutzner",
    address: "Lohrbergstr. 86c, Süd Lilli, Saarland",
  },
  {
    date: "2016-05-03",
    name: "Helen Jacobi",
    address: "760 A Street, South Frankfield, Illinois",
  },
  {
    date: "2016-05-02",
    name: "Brandon Deckert",
    address: "Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen",
  },
  {
    date: "2016-05-01",
    name: "Margie Smith",
    address: "23618 Windsor Drive, West Ricardoview, Idaho",
  },
];
</script>
