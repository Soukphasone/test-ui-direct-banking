<template>
  <div class="hidden sm:block">
    <div class="custom-select">
      <div>
        <button class="bt-pc" @click="toggleDropdown">
          <span v-if="check === 'la'">
            <img src="@/assets/img/laos-flag.png" alt="flag" class="flag-bt"
          /></span>
          <span v-else-if="check === 'en'">
            <img src="@/assets/img/england-flag.png" alt="flag" class="flag-bt"
          /></span>
          <span v-else>
            <img src="@/assets/img/vietnam-flag.png" alt="flag" class="flag-bt"
          /></span>
          <div class="text-black px-1">{{ $t("lg") }}</div>

        </button>
        <ul v-if="isOpen" class="dropdown-pc">
          <li
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option.value)"
          >
            <img
              :src="getImagePath(option.img)"
              alt="flag"
              class="flag-icon-pc"
            />

            <span> {{ option.language }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-if="hiddenContent" class="hidden max-sm:block">
    <div class="flex space-x-1">
      <div class="custom-select">
        <button class="bt-mb" @click="toggleDropdown">
          <span v-if="check === 'la'">
            <img src="@/assets/img/laos-flag.png" alt="flag" class="flag-bt"
          /></span>
          <span v-else-if="check === 'en'">
            <img src="@/assets/img/england-flag.png" alt="flag" class="flag-bt"
          /></span>
          <span v-else>
            <img src="@/assets/img/vietnam-flag.png" alt="flag" class="flag-bt"
          /></span>
        </button>
        <ul v-if="isOpen" class="dropdown-mb">
          <li
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option.value)"
          >
            <img
              :src="getImagePath(option.img)"
              alt="flag"
              class="flag-icon-mb"
            />

            <span> {{ option.lg }}</span>
          </li>
        </ul>
      </div>
      <div class="text-white mt-2">{{ $t("lg") }}</div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  hiddenContent: Boolean,
});
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { currentLanguage } from "../i18n";
const { locale } = useI18n();
const check = ref(currentLanguage.value);
watch(currentLanguage, (newLanguage) => {
  locale.value = newLanguage;
  check.value = newLanguage;
});
const isOpen = ref(false);
const selected = ref(currentLanguage.value);
const options = ref([
  {
    value: "en",
    language: "UK (EN)",
    lg:"EN",
    img: "england-flag.png",
  },
  {
    value: "la",
    language: "ລາວ (LA)",
    lg:"LA",
    img: "laos-flag.png",
  },
  {
    value: "vn",
    language: "Tiếng việt (VN)",
    lg:"VN",
    img: "vietnam-flag.png",
  },
]);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selected.value = option;
  currentLanguage.value = option;
  isOpen.value = false;
  localStorage.setItem("language", option);
};
const getImagePath = (img) => {
  return new URL(`/src/assets/img/${img}`, import.meta.url).href;
};
</script>
