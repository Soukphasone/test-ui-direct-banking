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
      <sidebar :showSide="showSide" :otherLink="otherLink"/>
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
const Sidebar = defineAsyncComponent(() => import("@/components/Sidebar.vue"));
const Header = defineAsyncComponent(() => import("@/components/Header.vue"));
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
const showSide = ref(false);
const hiddenContent = ref(true);
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
}
</script>
<style scoped></style>
