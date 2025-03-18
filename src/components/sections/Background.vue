<template>
    <section id="background" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">{{ t('background.title') }}</h2>
        
        <div class="max-w-3xl mx-auto">
          <!-- Education -->
          <div class="mb-16">
            <h3 class="text-2xl font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              {{ t('background.education_title') }}
            </h3>
            
            <div class="space-y-8">
              <div v-for="(edu, index) in education" :key="index" class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h4 class="text-xl font-bold">{{ edu.degree }}</h4>
                  <div class="flex items-center mt-2 md:mt-0">
                    <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      {{ edu.year }}
                    </span>
                  </div>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-2">{{ edu.institution }}</p>
                <p class="text-gray-700 dark:text-gray-300">{{ edu.description }}</p>
              </div>
            </div>
          </div>
          
          <!-- Certifications -->
          <div>
            <h3 class="text-2xl font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {{ t('background.certifications_title') }}
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(cert, index) in certifications" :key="index" class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold mb-1">{{ cert.name }}</h4>
                    <p class="text-gray-600 dark:text-gray-400 mb-2">{{ cert.issuer }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-500">{{ cert.date }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useTranslations, getLangFromUrl } from '@/i18n/utils';
  
  const lang = getLangFromUrl(new URL(window.location.href));
  const t = useTranslations(lang);
  
  const education = computed(() => [
    {
      degree: t('background.education.degree1'),
      institution: t('background.education.institution1'),
      year: '2018-2022',
      description: t('background.education.description1')
    },
    {
      degree: t('background.education.degree2'),
      institution: t('background.education.institution2'),
      year: '2016-2018',
      description: t('background.education.description2')
    }
  ]);
  
  const certifications = computed(() => [
    {
      name: t('background.certifications.cert1.name'),
      issuer: t('background.certifications.cert1.issuer'),
      date: t('background.certifications.cert1.date')
    },
    {
      name: t('background.certifications.cert2.name'),
      issuer: t('background.certifications.cert2.issuer'),
      date: t('background.certifications.cert2.date')
    },
    {
      name: t('background.certifications.cert3.name'),
      issuer: t('background.certifications.cert3.issuer'),
      date: t('background.certifications.cert3.date')
    },
    {
      name: t('background.certifications.cert4.name'),
      issuer: t('background.certifications.cert4.issuer'),
      date: t('background.certifications.cert4.date')
    }
  ]);
  </script>