<template>
      <nav
      class="hidden sm:block bg-gray-200 h-[70px] flex justify-between items-center px-4 sm:px-6 md:px-6 xl:max-w-screen-2xl mx-auto"
    >
      <div
        class="container mx-auto py-3 px-5 flex items-center justify-between"
      >
        <!-- Left section -->
        <ul class="flex space-x-6">
          <li><a href="#" class="text-white">Home</a></li>
          <li class="relative group">
            <a href="#" class="text-white">Customer Account</a>
            <ul
              v-show="isDropdownVisible"
              class="absolute bg-white border border-gray-300 rounded shadow-md p-2 space-y-2 hidden group-hover:block"
              @mouseover="showDropdown"
            >
              <li>
                <a href="#" class="block w-[200px]">Register</a>
              </li>
              <li>
                <a href="#" class="block">Customer List</a>
              </li>
              <li>
                <a href="#" class="block">Authorize Customer</a>
              </li>
              <li>
                <a href="#" class="block">Reset Password Customer</a>
              </li>
              <li>
                <a href="#" class="block">Change Password</a>
              </li>
            </ul>
          </li>
          <li class="relative group">
            <a href="#" class="text-white">Report</a>
            <ul
              v-show="isDropdownVisible"
              class="absolute bg-white text-black border border-gray-300 rounded shadow-md p-2 space-y-2 hidden group-hover:block"
              @mouseover="showDropdown"
              @mouseleave="hideDropdown"
            >
              <li>
                <a href="#" class="block w-[160px]">Report Customer List</a>
              </li>
            </ul>
          </li>
          <li class="relative group">
            <a href="#" class="text-white">Admin</a>
            <ul
              v-show="isDropdownVisible"
              class="absolute bg-white text-black border border-gray-300 rounded shadow-md p-2 space-y-2 hidden group-hover:block"
              @mouseover="showDropdown"
            >
              <li>
                <a href="#" class="block w-[110px]">Register User</a>
              </li>
              <li><a href="#" class="block">User List</a></li>
            </ul>
          </li>
        </ul>
        <!-- Right section -->
        <div class="flex space-x-4">
          <div class="custom-select">
            <button @click="toggleDropdown">
              <span v-if="check === 'la'">
                <img
                  src="@/assets/img/laos-flag.png"
                  alt="flag"
                  class="flag-icon"
              /></span>
              <span v-else-if="check === 'en'">
                <img
                  src="@/assets/img/united-states-flag-icon.png"
                  alt="flag"
                  class="flag-icon"
              /></span>
              <span v-else>
                <img
                  src="@/assets/img/vietnam-flag.png"
                  alt="flag"
                  class="flag-bt"
              /></span>
            </button>
            <ul v-if="isOpen" class="dropdown">
              <li
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option.value)"
              >
                <img
                  :src="getImagePath(option.img)"
                  alt="flag"
                  class="flag-icon"
                />

                {{ option.language }}
              </li>
            </ul>
          </div>
          <a href="#" class="py-2 px-2">
            <img
              src="@/assets/icons/icon-exit-white.png"
              alt="icon-exit"
              style="width: 25px; height: 25px"
          /></a>
        </div>
      </div>
    </nav>
</template>
<script setup>
import { ref } from "vue";
const isDropdownVisible = ref(true);
const isOpen = ref(false);
const selected = "en";
const options = ref([
  {
    value: "en",
    language: "US (EN)",
    img: "united-states-flag-icon.png",
  },
  {
    value: "la",
    language: "ລາວ (LA)",
    img: "laos-flag.png",
  },
  {
    value: "vn",
    language: "Tiếng việt (VN)",
    img: "vietnam-flag.png",
  },
]);
const showDropdown = () => {
  isDropdownVisible.value = true;
};

// const hideDropdown = () => {
//   isDropdownVisible.value = false;
// };
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selected.valueOf = option;
  //   currentLanguage.value = option;
  isOpen.value = false;
  localStorage.setItem("language", option);
};
const getImagePath = (img) => {
  return new URL(`/src/assets/img/${img}`, import.meta.url).href;
};
</script>