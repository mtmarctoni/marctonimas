<template>
  <div class="relative">
    <ToggleDropDown>
      <template #button-content>
        <button aria-label="Change language">
          <span class="text-xl md:text-base font-medium">{{
            currentLang.toUpperCase()
          }}</span>
        </button>
      </template>
      <template #default>
        <a
          href="/"
          class="flex items-center w-full px-4 py-2 text-sm hover:bg-primary/10"
          :class="{
            'text-secondary': currentLang === 'en',
          }"
          @click="setLang('en')"
        >
          <span class="mr-2">🇺🇸</span>
          English
        </a>
        <a
          href="/es/"
          class="flex items-center w-full px-4 py-2 text-sm hover:bg-primary/10"
          :class="{ 'text-secondary': currentLang === 'es' }"
          @click="setLang('es')"
        >
          <span class="mr-2">🇪🇸</span>
          Español
        </a>
      </template>
    </ToggleDropDown>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ToggleDropDown from "./ToggleDropDown.vue";
import { getLangFromUrl } from "@/i18n/utils";

const langDropdownOpen = ref(false);
const currentLang = ref("en");

// delete
// const toggleLangDropdown = () => {
//   langDropdownOpen.value = !langDropdownOpen.value;
// };

const closeDropdown = () => {
  if (langDropdownOpen.value) {
    langDropdownOpen.value = false;
  }
};

onMounted(() => {
  // Get language from URL
  currentLang.value = getLangFromUrl(new URL(window.location.href));
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});

const setLang = (lang) => {
  currentLang.value = lang;
  langDropdownOpen.value = false;
};
</script>
