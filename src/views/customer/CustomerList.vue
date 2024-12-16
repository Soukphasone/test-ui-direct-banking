<template>
  <h2
    class="flex text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 justify-center"
  >
    Customer List
  </h2>
  <div class="border rounded shadow-md bg-gray-50">
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="Full name" prop="name" />
      <el-table-column label="Email" prop="email" />
      <el-table-column label="Tel" prop="tel" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Search" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex justify-center py-4 sm:py-2">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="text-base sm:text-sm xs:text-xs"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

interface User {
  name: string;
  email: string;
  tel: string;
}

const search = ref("");
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

const tableData: User[] = [
  {
    name: "Tom",
    email: "email@gmail.com",
    tel: "020 9910019",
  },
  {
    name: "John",
    email: "email@gmail.com",
    tel: "020 9910019",
  },
  {
    name: "Morgan",
    email: "email@gmail.com",
    tel: "020 9910019",
  },
  {
    name: "Jessy",
    email: "email@gmail.com",
    tel: "020 9910019",
  },
];
</script>
