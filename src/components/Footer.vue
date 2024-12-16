<template>
     <footer>
          <div class="container mx-auto py-0 px-0">
            <img src="@/assets/img/Direct-banking-lvb_04.jpg" alt="logo" />
          </div>
        </footer>
        
</template>

<script setup>
import { inject } from "vue";
const hiddenContent = inject("hiddenContent");
console.log("Footer:", hiddenContent)
</script>