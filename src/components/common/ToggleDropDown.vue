<template>
  <div class="relative" ref="dropdown">
    <button
      @click="toggleDropdown"
      class="flex items-center justify-center w-12 h-12 md:w-8 md:h-8 rounded-full border-3 focus:outline-none border-secondary/50 dark:border-primary/50 hover:bg-primary/20 dark:hover:bg-secondary/20"
      aria-label="Toggle dropdown"
    >
      <slot name="button-content"></slot>
    </button>

    <div
      v-if="dropdownOpen"
      class="absolute right-0 mt-3 w-auto bg-bg-secondary rounded-md shadow-lg py-1 z-50 border border-primary/50"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const dropdownOpen = ref(false);
const dropdown = ref(null);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    dropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
