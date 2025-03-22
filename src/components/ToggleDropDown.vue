<template>
  <div class="relative" ref="dropdown">
    <button
      @click="toggleDropdown"
      class="flex items-center justify-center w-8 h-8 rounded-full border border-secondary/50 focus:outline-none"
      aria-label="Toggle dropdown"
    >
      <slot name="button-content"></slot>
    </button>

    <div
      v-if="dropdownOpen"
      class="absolute left-0 mt-3 w-36 bg-bg-secondary rounded-md shadow-lg py-1 z-10 border border-fg"
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
