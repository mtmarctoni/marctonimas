<template>
    <section class="relative min-h-screen flex items-center pt-20">
      <div class="container mx-auto px-4 py-16 md:py-32 z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {{ t('hero.title') }}
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            {{ t('hero.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              class="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {{ t('hero.cta_primary') }}
            </a>
            <a 
              href="#contact" 
              class="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              {{ t('hero.cta_secondary') }}
            </a>
          </div>
          
          <div class="mt-16 flex justify-center">
            <WalletConnect />
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useTranslations, getLangFromUrl } from '@/i18n/utils';
  import WalletConnect from '@/components/WalletConnect.vue';
  
  // Get current language from URL
  const currentPath = window.location.pathname;
  const lang = getLangFromUrl(new URL(window.location.href));
  const t = useTranslations(lang);
  </script>  