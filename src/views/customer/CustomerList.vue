<template>
  <div class="min-h-screen">
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="Full name" prop="name" />
      <el-table-column label="Email" prop="email" />
      <el-table-column label="Tel" prop="tel" />
      <el-table-column align="right">
        <template #header>
          <el-input
            v-model="search"
            size="small"
            placeholder="Type to search"
          />
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
    <div class="py-4">
      <el-pagination background layout="prev, pager, next" :total="1000" />
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
