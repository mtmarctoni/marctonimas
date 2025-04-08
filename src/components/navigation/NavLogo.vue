<script setup>
import { MY_NAME_LOGO } from "@/utils/constants";
</script>

<template>
  <a
    href="/#"
    class="text-xl font-bold flex items-center gap-2 transition-transform duration-300 hover:scale-105"
  >
    <!-- only show the next div when screen width is more than 400px -->
    <div class="relative w-9 h-9 min-[400px]:block hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full"
      ></div>
      <div
        class="text-center absolute inset-1 bg-bg-secondary rounded-full flex items-center justify-center"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary text-sm font-bold"
          >W3</span
        >
      </div>
    </div>
    <span
      class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >{{ MY_NAME_LOGO }}</span
    >
  </a>
</template>
