<template>
  <div class="min-h-screen">
    <Header />
    <Navbar />
    <div class="m-screen h-screen flex">
      <!-- Side bar -->
      <div
        class="hidden max-sm:block w-[300px] h-full bg-gray-200 text-white"
        v-show="showSide"
      >
        <div class="h-[calc(100vh-50px)] bg-gray-200 py-[20px]">
          <div
            class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
          >
            <div class="flex flex-col justify-between space-y-[10px]">
              <router-link
                to="/"
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-100 hover:bg-gray-100 hover:text-gray-900"
              >
                <div class="text-mg-l text-black">Home</div>
              </router-link>
              <router-link
                to="/"
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-100 hover:text-gray-900"
              >
                <div class="text-mg-l text-black">Profile</div>
              </router-link>
            </div>
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
          <div class="border border-gray-300 rounded-md p-[20px] h-full">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { RouterView } from "vue-router";
const Navbar = defineAsyncComponent(() => import("@/components/Navbar.vue"));
const Header = defineAsyncComponent(() => import("@/components/Header.vue"));
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
const showSide = ref(false);
const hiddenContent = ref(true);

const toggleSideBar = () => {
  showSide.value = !showSide.value;
  hiddenContent.value = !showSide.value;
};
</script>
