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
      <sidebar :showSide="showSide" :navigate="otherLink" />
      <div class="w-full h-full bg-gray-100">
        <div class="hidden max-sm:block nav-mobile ">
          <div
            class="h-[60px] flex items-center shadow-sm px-[5px] w-full py-[10px] z-10 justify-between"
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

            <!--Button change language -->
            <div class="space-x-4 px-4">
            <changelanguage />
            </div>
          </div>
        </div>
        <div class="bg-gray-50 p-[10px]" v-show="hiddenContent">
          <div class="h-full min-h-screen">
            <RouterView />
          </div>
        </div>
        <Footer :hiddenContent="hiddenContent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import { RouterView, useRouter } from "vue-router";

// Import components asynchronously
const Navbar = defineAsyncComponent(() => import("./components/Navbar.vue"));
const Changelanguage = defineAsyncComponent(() => import("./components/ChangeLanguage.vue"));
const Sidebar = defineAsyncComponent(() => import("./components/Sidebar.vue"));
const Header = defineAsyncComponent(() => import("./components/Header.vue"));
const Footer = defineAsyncComponent(() => import("./components/Footer.vue"));


const showSide = ref<boolean>(false);
const hiddenContent = ref<boolean>(true);
const router = useRouter();
const toggleSideBar = (): void => {
  showSide.value = !showSide.value;
  hiddenContent.value = !showSide.value;
};
const otherLink = async (value: any): Promise<void> => {
  switch (value) {
    case "home":
      await router.push("/");
      break;
    case "customer-register":
      await router.push("/customer/register");
      break;
    case "customer-list":
      await router.push("/customer/list");
      break;
    case "authorization-list":
      await router.push("/authorization/list");
      break;
    case "report-customer-list":
      await router.push("/report-customer-list");
      break;
    case "reset-password-customer":
      await router.push("/reset-password-customer");
      break;
    case "admin-user-register":
      await router.push("/admin/user/register");
      break;
    case "admin-user-list":
      await router.push("/admin/user/list");
      break;
    case "change-password":
      await router.push("/change-password");
      break;
  }
  // Update visibility state
  showSide.value = false;
  hiddenContent.value = true;
};
</script>
