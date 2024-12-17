<template>
  <footer v-if="hiddenContent">
    <div class="container mx-auto py-0 px-0">
      <img src="@/assets/img/Direct-banking-lvb_04.jpg" alt="logo" />
    </div>
  </footer>
</template>
<script setup lang="ts">
defineProps<{
  hiddenContent: boolean; 
}>();

</script>