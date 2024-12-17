// import { defineStore } from "pinia";
// import { useRouter } from "vue-router";
// import { ref } from "vue";

// export const useRouterStore = defineStore("routerStore", () => {
//   const router = useRouter();
//   const showSide = ref<boolean>(false);
//   const hiddenContent = ref<boolean>(false);

//   const otherLink = async (
//     value: "home" | "customer-register" | "customer-list" | "authorization-list"
//   ) => {
//     console.log("Value at the store:", value);
//     switch (value) {
//       case "home":
//         router.push("/");
//         showSide.value = !showSide.value;
//         hiddenContent.value = !showSide.value;
//         break;
//       case "customer-register":
//         router.push("/customer/register");
//         showSide.value = !showSide.value;
//         hiddenContent.value = !showSide.value;
//         break;
//       case "customer-list":
//         router.push("/customer/list");
//         break;
//       case "authorization-list":
//         router.push("/authorization/list");
//         showSide.value = !showSide.value;
//         hiddenContent.value = !showSide.value;
//         break;
//     }
//   };

//   return { otherLink, showSide, hiddenContent };
// });
