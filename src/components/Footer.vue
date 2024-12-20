<template>
  <footer v-if="hiddenContent">
    <div class="hidden sm:block w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-">
      <img src="@/assets/img/Direct-banking-lvb_04.jpg" alt="logo" />
    </div>
          <div class="h-[60px]">
        <img
          src="/src/assets/img/Direct-banking-lvb_04.jpg"
          alt="logo"
          class="h-[60px]"
        />
      </div>
  </footer>
</template>
<script setup>
defineProps({
  hiddenContent: Boolean,
});
</script>