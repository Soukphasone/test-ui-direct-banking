<template>
  <footer v-if="hiddenContent">
    <div class="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-">
      <img src="@/assets/img/Direct-banking-lvb_04.jpg" alt="logo" />
    </div>
  </footer>
</template>
<script setup lang="ts">
defineProps<{
  hiddenContent: boolean; 
}>();

</script>