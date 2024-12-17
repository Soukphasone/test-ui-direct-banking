<template>
  <div
    class="min-h-screen border border-gray-600 w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl sm:border-0 mx-auto"
  >
    <Header />
    <Navbar />
    <div
      class="flex w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto"
    >
      <!-- Side bar -->
      <div
        class="hidden max-sm:block w-[300px] h-full bg-gray-200 text-white"
        v-show="showSide"
      >
        <div class="h-[calc(100vh-50px)] bg-gray-200 py-[20px]">
          <div
            class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
          >
            <!-- Main Menu -->
            <div class="flex flex-col justify-between space-y-[10px]">
              <div
               @click.prevent="otherLink('home')"
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-100 hover:bg-gray-100 hover:text-gray-900"
              >
                <div class="text-mg-l text-black">Home</div>
              </div>

              <!-- Customer Account with Dropdown -->
              <div class="relative">
                <div
                  @click="showCustomerDropdown = !showCustomerDropdown"
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
                >
                  <div class="text-mg-l text-black">Customer Account</div>
                  <svg
                    class="ml-auto w-4 h-4 transition-transform duration-300"
                    :class="{ 'rotate-180': showCustomerDropdown }"
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
                    @click.prevent="otherLink('customer-register')"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Register
                  </div>
                  <div
                     @click.prevent="otherLink('customer-list')"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Customer List
                  </div>
                  <div
                    @click.prevent="otherLink('authorization-list')"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Authorize Customer
                  </div>
                  <router-link
                    to="/"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Reset Password Customer
                  </router-link>
                </div>
              </div>
              <!-- Customer Report with Dropdown -->
              <div class="relative">
                <div
                  @click="showReportDropdown = !showReportDropdown"
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
                >
                  <div class="text-mg-l text-black">Report</div>
                  <svg
                    class="ml-auto w-4 h-4 transition-transform duration-300"
                    :class="{ 'rotate-180': showReportDropdown }"
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
                  <router-link
                    to="/"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Report Customer List
                  </router-link>
                </div>
              </div>
              <!-- Customer Admin with Dropdown -->

              <div class="relative">
                <div
                  @click="showAdminDropdown = !showAdminDropdown"
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
                >
                  <div class="text-mg-l text-black">Admin</div>
                  <svg
                    class="ml-auto w-4 h-4 transition-transform duration-300"
                    :class="{ 'rotate-180': showAdminDropdown }"
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
                  <router-link
                    to="/"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Register User
                  </router-link>
                  <router-link
                    to="/"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    User List
                  </router-link>
                  <router-link
                    to="/"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Change Password Login
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Exit Button -->
            <div class="h-[50px]">
              <div>
                <router-link
                  to="/"
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-100 hover:text-gray-900"
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
      <div class="w-full h-full bg-gray-100">
        <div
          class="hidden max-sm:block h-[50px] flex items-center shadow-sm px-[5px] w-full py-[10px] z-10 border-b"
        >
          <!-- Hamburger menu -->
          <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5 7H19"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5 12L19 12"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5 17L19 17"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div class="bg-gray-50 p-[20px]" v-show="hiddenContent">
          <div class="h-full min-h-screen">
            <RouterView />
          </div>
        </div>
        <Footer :hiddenContent="hiddenContent" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { RouterView, useRouter } from "vue-router";
const Navbar = defineAsyncComponent(() => import("@/components/Navbar.vue"));
const Header = defineAsyncComponent(() => import("@/components/Header.vue"));
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
const showSide = ref(false);
const hiddenContent = ref(true);
const showCustomerDropdown = ref(false);
const showReportDropdown = ref(false);
const showAdminDropdown = ref(false);
const router = useRouter();
const toggleSideBar = () => {
  showSide.value = !showSide.value;
  hiddenContent.value = !showSide.value;
};
const otherLink = async (value) => {
  if (value === "home") {
    router.push("/");
    showSide.value = !showSide.value;
    hiddenContent.value = !showSide.value;
  }
  if (value === "customer-register") {
    router.push("/customer/register");
    showSide.value = !showSide.value;
    hiddenContent.value = !showSide.value;
  }
  if (value === "customer-list") {
    router.push("/customer/list");
    showSide.value = !showSide.value;
    hiddenContent.value = !showSide.value;
  }
  if (value === "authorization-list") {
    router.push("/authorization/list");
    showSide.value = !showSide.value;
    hiddenContent.value = !showSide.value;
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
