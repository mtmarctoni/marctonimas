<script setup>
import { ref, computed } from "vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import { useTranslations, getLangFromUrl } from "@/i18n/utils";

const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Get current language from URL
const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);

// Navigation items with translations
const navItems = computed(() => [
  { href: `${lang === "en" ? "/" : "/es/"}#about`, label: t("nav.about") },
  { href: `${lang === "en" ? "/" : "/es/"}#skills`, label: t("nav.skills") },
  {
    href: `${lang === "en" ? "/" : "/es/"}#projects`,
    label: t("nav.projects"),
  },
  {
    href: `${lang === "en" ? "/" : "/es/"}#background`,
    label: t("nav.background"),
  },
  { href: `${lang === "en" ? "/" : "/es/"}#contact`, label: t("nav.contact") },
]);
</script>

<template>
  <header
    class="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
  >
    <div
      class="container mx-auto max-w-5xl px-4 py-3 flex justify-between items-center"
    >
      <a href="/#" class="text-xl font-bold flex items-center gap-2">
        <div class="relative w-8 h-8">
          <div
            class="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse"
          ></div>
          <div
            class="text-center absolute inset-1 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center"
          >
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary text-sm font-bold"
              >W3</span
            >
          </div>
        </div>
        <span>{{ t("nav.name") }}</span>
      </a>

      <div class="flex items-center gap-6">
        <nav class="hidden md:flex gap-6">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="hover:text-secondary transition-all ease-in-out duration-300 font-semibold border-b-2 border-transparent hover:border-secondary"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="flex items-center gap-3">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button @click="toggleMobileMenu" class="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden absolute w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
    >
      <nav class="container mx-auto px-4 py-4 flex flex-col gap-1">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="hover:text-purple-500 dark:hover:text-purple-400 transition-colors py-2"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
