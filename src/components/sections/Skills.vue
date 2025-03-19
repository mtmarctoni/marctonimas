<template>
  <section id="skills" class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">
        {{ t("skills.title") }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(category, index) in skillCategories"
          :key="index"
          class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow"
        >
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4"
            >
              <component
                :is="category.icon"
                class="w-6 h-6 text-purple-600 dark:text-purple-400"
              />
            </div>
            <h3 class="text-xl font-bold">{{ category.title }}</h3>
          </div>

          <div class="space-y-4">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="space-y-2"
            >
              <div class="flex justify-between">
                <span class="text-gray-800 dark:text-gray-200">{{
                  skill.name
                }}</span>
                <span class="text-gray-500 dark:text-gray-400"
                  >{{ skill.level }}%</span
                >
              </div>
              <div
                class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useTranslations, getLangFromUrl } from "@/i18n/utils";
import BlockchainIcon from "@/assets/Blockchain.svg?component";
import CodeIcon from "@/assets/code.svg?component";
import ToolsIcon from "@/assets/tools.svg?component";

const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);

const skillCategories = computed(() => [
  {
    title: t("skills.blockchain_title"),
    icon: BlockchainIcon,
    skills: [
      { name: "Solidity", level: 90 },
      { name: "Ethereum", level: 85 },
      { name: "Smart Contracts", level: 90 },
      { name: "DeFi Protocols", level: 80 },
      { name: "NFTs", level: 85 },
    ],
  },
  {
    title: t("skills.frontend_title"),
    icon: CodeIcon,
    skills: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "React", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Web3.js/ethers.js", level: 85 },
    ],
  },
  {
    title: t("skills.tools_title"),
    icon: ToolsIcon,
    skills: [
      { name: "Hardhat/Truffle", level: 85 },
      { name: "Git", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 80 },
    ],
  },
]);
</script>
