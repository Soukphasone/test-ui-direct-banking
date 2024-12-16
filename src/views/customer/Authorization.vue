<template>
      <h2
        class="flex text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 justify-center"
      >
        Customer Information
      </h2>
  <div class="border rounded shadow-md bg-gray-50 min-h-screen">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column label="Date" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column property="name" label="Name" width="120" />
      <el-table-column
        property="address"
        label="use show-overflow-tooltip"
        width="240"
        show-overflow-tooltip
      />
      <el-table-column property="address" label="address" />
    </el-table>
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
