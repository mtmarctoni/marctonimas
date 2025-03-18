<template>
  <div class="relative">
    <button 
      @click="toggleDropdown" 
      class="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none"
      aria-label="Toggle dropdown"
    >
      <slot name="button-content"></slot>
    </button>
    
    <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
