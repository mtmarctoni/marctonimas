<template>
  <div class="relative">
    <ToggleDropDown>
      <template #button-content>
        <button
          class="flex items-center justify-center w-8 h-8 rounded-full border focus:outline-none border-primary dark:border-secondary hover:bg-primary/20 dark:hover:bg-secondary/20"
          aria-label="Toggle theme"
        >
          <SunIcon v-if="currentTheme === 'light'" class="w-4 h-4" />
          <MoonIcon v-else-if="currentTheme === 'dark'" class="w-4 h-4" />
          <SystemIcon v-else class="w-4 h-4" />
        </button>
      </template>
      <template #default>
        <button
          @click="setTheme('light')"
          class="flex items-center w-full px-4 py-2 text-sm hover:bg-primary/10 dark:hover:bg-primary/40"
          :class="{ 'text-secondary': currentTheme === 'light' }"
        >
          <SunIcon class="h-4 w-4 mr-2" />
          {{ t("theme.light") }}
        </button>
        <button
          @click="setTheme('dark')"
          class="flex items-center w-full px-4 py-2 text-sm hover:bg-primary/10 dark:hover:bg-primary/40"
          :class="{ 'text-secondary': currentTheme === 'dark' }"
        >
          <MoonIcon class="h-4 w-4 mr-2" />

          {{ t("theme.dark") }}
        </button>
        <button
          @click="setTheme('system')"
          class="flex items-center w-full px-4 py-2 text-sm hover:bg-primary/10 dark:hover:bg-primary/40"
          :class="{ 'text-secondary': currentTheme === 'system' }"
        >
          <SystemIcon class="h-4 w-4 mr-2" />

          {{ t("theme.system") }}
        </button>
      </template>
    </ToggleDropDown>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ToggleDropDown from "./ToggleDropDown.vue";
import { useTranslations, getLangFromUrl } from "../../i18n/utils";
import { MoonIcon, SunIcon, SystemIcon } from "@/utils/icons";

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
