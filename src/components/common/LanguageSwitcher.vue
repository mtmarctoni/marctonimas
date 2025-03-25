<template>
  <div class="relative">
    <ToggleDropDown>
      <template #button-content>
        <button
          class="flex items-center justify-center w-8 h-8 rounded-full border border-primary dark:border-secondary hover:bg-primary/20 dark:hover:bg-secondary/20 focus:outline-none"
          aria-label="Change language"
        >
          <span class="text-sm font-medium">{{
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
