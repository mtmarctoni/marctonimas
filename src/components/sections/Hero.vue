<script setup>
import { useTranslations, getLangFromUrl } from "@/i18n/utils";
import WalletConnect from "@/components/wallet/WalletConnect.vue";
import { ArrowDownIcon } from "@/utils/icons";

// Get current language from URL
const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);

const titleHtmlString = t("hero.title");
const subtitleHtmlString = t("hero.subtitle");
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-20">
    <div class="container mx-auto px-4 py-16 md:py-32 z-10">
      <div class="max-w-3xl mx-auto px-8 text-center">
        <div v-html="titleHtmlString"></div>
        <div v-html="subtitleHtmlString" class="text-xl md:text-2xl my-8"></div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center p-10">
          <a
            href="#projects"
            class="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {{ t("hero.cta_primary") }}
          </a>
          <a
            href="#contact"
            class="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
          >
            {{ t("hero.cta_secondary") }}
          </a>
        </div>

        <div class="mt-16 flex justify-center">
          <WalletConnect />
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <a href="#about" class="text-gray-500 dark:text-gray-400">
        <ArrowDownIcon class="h-8 w-8 text-primary/80" />
      </a>
    </div>
  </section>
</template>
