<template>
  <div
    v-if="showSide"
    class="hidden max-sm:block w-[600px] h-full bg-gray-200 text-white"
  >
    <div class="h-[60px] bg-gray-50 flex justify-start items-center">
      <div class="px-[60px] mt-4">
        <!-- <h3 class="font-bold text-xl">Admin Dashboard</h3> -->
        <img
                src="/src/assets/img/LVB.png"
                alt="logo"
              />
      </div>
    </div>
    <div class="h-[calc(100vh-90px)] bg-gray-50 py-[20px]">
      <div
        class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
      >
        <!-- Main Menu -->
        <div class="flex flex-col justify-between space-y-[10px]">
          <div
            @click.prevent="navigate('home')"
            class="border inline-flex relative items-center py-[10px] px-[10px] bg-gray-100 w-full text-sm font-medium rounded-md border-gray-150 hover:bg-gray-100 hover:text-gray-900"
          >
            <div class="text-mg-l text-black">{{ $t("home") }}</div>
          </div>

          <!-- Customer Account with Dropdown -->
          <div class="relative">
            <div
              @click="showDropdown('customer')"
              class="border inline-flex relative items-center bg-gray-100 py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-150 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
            >
              <div class="text-mg-l text-black">
                {{ $t("customer_account") }}
              </div>
              <svg
                class="ml-auto w-4 h-4 transition-transform duration-300"
                :class="{ 'rotate-180': showCustomerDropdown }"
                :style="{ stroke: showCustomerDropdown ? 'black' : 'black' }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>

            <!-- Submenu -->
            <div
              v-show="showCustomerDropdown"
              class="absolute left-0 mt-1 w-full bg-white shadow-md rounded-md z-10"
            >
              <div
                @click.prevent="navigate('customer-register')"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                > {{ $t("register") }}
              </div>
              <div
                @click.prevent="navigate('customer-list')"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                > {{ $t("customer_list") }}
              </div>
              <div
                @click.prevent="navigate('authorization-list')"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                > {{ $t("authorize_customer") }}
              </div>
              <div
                @click.prevent="navigate('reset-password-customer')"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                > {{ $t("reset_pass_customer") }}
              </div>
            </div>
          </div>
          <!-- Customer Report with Dropdown -->
          <div class="relative">
            <div
              @click="showDropdown('report')"
              class="border inline-flex relative items-center bg-gray-100 py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-150 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
            >
              <div class="text-mg-l text-black">{{ $t("report") }}</div>
              <svg
                class="ml-auto w-4 h-4 transition-transform duration-300"
                :class="{ 'rotate-180': showReportDropdown }"
                :style="{ stroke: showCustomerDropdown ? 'black' : 'black' }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>

            <!-- Submenu -->
            <div
              v-show="showReportDropdown"
              class="absolute left-0 mt-1 w-full bg-white shadow-md rounded-md z-10"
            >
              <div
                @click.prevent="navigate('report-customer-list')"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                > {{ $t("report_customer_list") }}
              </div>
            </div>
          </div>
          <!-- Customer Admin with Dropdown -->

          <div class="relative">
            <div
              @click="showDropdown('admin')"
              class="border inline-flex relative items-center bg-gray-100 py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-150 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
            >
              <div class="text-mg-l text-black">Admin</div>
              <svg
                class="ml-auto w-4 h-4 transition-transform duration-300"
                :class="{ 'rotate-180': showAdminDropdown }"
                :style="{ stroke: showCustomerDropdown ? 'black' : 'black' }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>

            <!-- Submenu -->
            <div
              v-show="showAdminDropdown"
              class="absolute left-0 mt-1 w-full bg-white shadow-md rounded-md z-10"
            >
              <div
                @click.prevent="navigate('admin-user-register')"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                > {{ $t("register") }}
              </div>
              <div
                @click.prevent="navigate('admin-user-list')"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                > {{ $t("user_list") }}
              </div>
              <div
                @click.prevent="navigate('change-password')"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                > {{ $t("change_password") }}
              </div>
            </div>
          </div>
        </div>

        <!-- Exit Button -->
        <div class="">
          <div>
            <router-link
              to="#"
              class="border inline-flex relative items-center bg-gray-100 py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-150 hover:bg-gray-100 hover:text-gray-900"
            >
              <img
                src="/src/assets/icons/icon-exit-red.png"
                alt="icon-exit"
                style="width: 20px; height: 20px"
              />
              <div class="text-mg-l text-black px-4">Exit</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
defineProps<{
  showSide: boolean;
  navigate: (value: any) => Promise<void>;
}>();
const showCustomerDropdown = ref(false);
const showReportDropdown = ref(false);
const showAdminDropdown = ref(false);
const showDropdown = async (value: any) => {
  switch (value) {
    case "customer":
      showCustomerDropdown.value = !showCustomerDropdown.value;
      showAdminDropdown.value = false;
      showReportDropdown.value = false;
      break;
    case "report":
      showReportDropdown.value = !showReportDropdown.value;
      showCustomerDropdown.value = false;
      showAdminDropdown.value = false;
      break;
    case "admin":
      showAdminDropdown.value = !showAdminDropdown.value;
      showCustomerDropdown.value = false;
      showReportDropdown.value = false;
      break;
  }
};
</script>
<style scoped>
/* Optional: Add smooth dropdown animation */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
