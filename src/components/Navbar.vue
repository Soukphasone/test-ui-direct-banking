<template>
  <nav
    class="hidden sm:block bg-gray-200 h-[70px] flex justify-between items-center px-4 w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto"
  >
    <div class="container mx-auto py-3 px-5 flex items-center justify-between">
      <!-- Left section -->
      <ul class="flex space-x-6 z-custom-100">
        <li>
          <router-link to="/" class="text-white">{{ $t("home") }}</router-link>
        </li>
        <li class="relative group">
          <a class="text-white">{{ $t("customer_account") }}</a>
          <ul
            v-show="isDropdownVisible"
            class="absolute bg-white border border-gray-300 rounded shadow-md p-2 space-y-2 hidden group-hover:block"
            @mouseover="showDropdown"
          >
            <li>
              <router-link to="/customer/register" class="block w-[200px]">{{
                $t("register")
              }}</router-link>
            </li>
            <li>
              <router-link to="/customer/list" class="block">{{
                $t("customer_list")
              }}</router-link>
            </li>
            <li>
              <router-link to="/authorization/list" class="block">{{
                $t("authorize_customer")
              }}</router-link>
            </li>
            <li>
              <router-link to="/reset-password-customer" class="block">{{
                $t("reset_pass_customer")
              }}</router-link>
            </li>
          </ul>
        </li>
        <li class="relative group">
          <a class="text-white">{{ $t("report") }}</a>
          <ul
            v-show="isDropdownVisible"
            class="absolute bg-white text-black border border-gray-300 rounded shadow-md p-2 space-y-2 hidden group-hover:block"
            @mouseover="showDropdown"
            @mouseleave="hideDropdown"
          >
            <li>
              <router-link to="/report-customer-list" class="block w-[160px]">{{
                $t("report_customer_list")
              }}</router-link>
            </li>
          </ul>
        </li>
        <li class="relative group">
          <a href="#" class="text-white">{{ $t("admin") }}</a>
          <ul
            v-show="isDropdownVisible"
            class="absolute bg-white text-black border border-gray-300 rounded shadow-md p-2 space-y-2 hidden group-hover:block"
            @mouseover="showDropdown"
          >
            <li>
              <router-link to="/admin/user/register" class="block w-[180px]">{{
                $t("register")
              }}</router-link>
            </li>
            <li>
              <router-link to="/admin/user/list" class="block">{{
                $t("user_list")
              }}</router-link>
            </li>
            <li>
              <router-link to="/change-password" class="block">{{
                $t("change_password")
              }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <!-- Right section -->
      <div class="flex space-x-4">
        <changelanguage />
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
import { ref, defineAsyncComponent } from "vue";

const Changelanguage = defineAsyncComponent(() =>
  import("./ChangeLanguage.vue")
);
const isDropdownVisible = ref(true);
</script>
