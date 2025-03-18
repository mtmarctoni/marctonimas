<template>
    <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">{{ t('projects.title') }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" class="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800 group">
            <div class="relative h-48 overflow-hidden">
              <img :src="project.image && '/default-web3-image.jpg'" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div class="flex gap-2">
                  <a :href="project.demoUrl" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    {{ t('projects.live_demo') }}
                  </a>
                  <a :href="project.codeUrl" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                    {{ t('projects.view_code') }}
                  </a>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md text-xs">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import {Image} from 'astro:assets'
  import { useTranslations, getLangFromUrl } from '@/i18n/utils';
  
  const lang = getLangFromUrl(new URL(window.location.href));
  const t = useTranslations(lang);
  
  const projects = computed(() => [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: '/placeholder.svg?height=192&width=384',
      tags: ['Solidity', 'React', 'Ethers.js', 'Hardhat', 'IPFS'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: '/placeholder.svg?height=192&width=384',
      tags: ['DeFi', 'Solidity', 'React', 'Web3.js', 'Truffle'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: '/placeholder.svg?height=192&width=384',
      tags: ['NFT', 'Marketplace', 'React', 'Solidity', 'IPFS'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      image: '/placeholder.svg?height=192&width=384',
      tags: ['DAO', 'Governance', 'React', 'Solidity', 'The Graph'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      image: '/placeholder.svg?height=192&width=384',
      tags: ['Smart Contract', 'Security', 'Auditing', 'Solidity'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      image: '/default-web3-image.jpg',
      tags: ['Layer 2', 'Scaling', 'Optimism', 'React'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ]);
  </script>  