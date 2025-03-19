<template>
  <div class="relative">
    <ToggleDropDown>
      <template #button-content>
        <button
          class="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none"
          aria-label="Toggle theme"
        >
          <svg
            v-if="currentTheme === 'light'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            v-else-if="currentTheme === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </template>
      <template #default>
        <button
          @click="setTheme('light')"
          class="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          :class="{ 'text-purple-500': currentTheme === 'light' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          {{ t("theme.light") }}
        </button>
        <button
          @click="setTheme('dark')"
          class="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          :class="{ 'text-purple-500': currentTheme === 'dark' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          {{ t("theme.dark") }}
        </button>
        <button
          @click="setTheme('system')"
          class="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          :class="{ 'text-purple-500': currentTheme === 'system' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {{ t("theme.system") }}
        </button>
      </template>
    </ToggleDropDown>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ToggleDropDown from "./ToggleDropDown.vue";
import { useTranslations, getLangFromUrl } from "../i18n/utils";

const themeDropdownOpen = ref(false);
const currentTheme = ref("system");
const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);

// delete
// const toggleThemeDropdown = () => {
//   themeDropdownOpen.value = !themeDropdownOpen.value;
// };

const closeDropdown = () => {
  if (themeDropdownOpen.value) {
    themeDropdownOpen.value = false;
  }
};

onMounted(() => {
  // Get theme from localStorage or default to system
  const savedTheme = localStorage.getItem("theme");
  const systemDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (savedTheme) {
    currentTheme.value = savedTheme;
  } else {
    currentTheme.value = "system";
    document.documentElement.classList.toggle("dark", systemDarkMode);
  }

  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});

const setTheme = (theme) => {
  currentTheme.value = theme;
  localStorage.setItem("theme", theme);

  if (theme === "system") {
    const systemDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    document.documentElement.classList.toggle("dark", systemDarkMode);
  } else {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }

  themeDropdownOpen.value = false;
};
</script>
