<script setup>
import { ref, computed } from "vue";

import MobileMenu from "./MobileMenu.vue";
import ThemeSwitcher from "@/components/common/ThemeSwitcher.vue";
import LanguageSwitcher from "@/components/common/LanguageSwitcher.vue";
import NavLogo from "./NavLogo.vue";
import NavLinks from "./NavLinks.vue";

import { useTranslations, getLangFromUrl } from "@/i18n/utils";
import { useNavigation } from "@/composables/useNavigation";
import { MenuIcon, CrossIcon } from "@/utils/icons";

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;

  // Prevent scrolling when menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

// Get current language from URL
const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);

// Navigation items with translations
const navItems = computed(() => [
  {
    href: `${lang === "en" ? "/" : "/es/"}#about`,
    label: t("nav.about"),
    id: "about",
  },
  {
    href: `${lang === "en" ? "/" : "/es/"}#skills`,
    label: t("nav.skills"),
    id: "skills",
  },
  {
    href: `${lang === "en" ? "/" : "/es/"}#projects`,
    label: t("nav.projects"),
    id: "projects",
  },
  {
    href: `${lang === "en" ? "/" : "/es/"}#background`,
    label: t("nav.background"),
    id: "background",
  },
  {
    href: `${lang === "en" ? "/" : "/es/"}#contact`,
    label: t("nav.contact"),
    id: "contact",
  },
]);

const { activeSection, isScrolled } = useNavigation(navItems.value);
</script>

<template>
  <header
    :class="[
      'fixed w-full top-0 z-50 transition-all duration-300 border-b',
      isScrolled
        ? 'bg-bg-secondary shadow-md border-primary/40 py-2'
        : 'bg-transparent border-transparent py-4',
    ]"
  >
    <div
      class="container mx-auto max-w-5xl px-4 flex justify-between items-center"
    >
      <!-- Logo -->
      <NavLogo />

      <div class="flex items-center gap-4">
        <!-- Desktop Navigation -->
        <NavLinks :navItems="navItems" :activeSection="activeSection" />

        <!-- Theme & Language Switchers -->
        <div class="flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg hover:bg-fg-alt/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div v-if="!mobileMenuOpen" class="h-6 w-6">
              <MenuIcon />
            </div>
            <div v-else class="h-6 w-6">
              <CrossIcon />
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <MobileMenu
      @close="toggleMobileMenu"
      :is-open="mobileMenuOpen"
      :nav-items="navItems"
      :active-section="activeSection"
      :footer-text="t('nav.mobile_menu_footer')"
      :connect-text="t('nav.connect')"
    />
  </header>
</template>
