<script setup>
import { ref } from "vue";
import { CheckIcon } from "@/utils/icons";

defineProps({
  job: {
    type: Object,
    required: true,
  },
  dropdown: {
    type: Array,
    required: true,
  },
});

const isExpanded = ref(false);

const toggleDuties = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div
    class="group relative bg-bg-secondary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-fg-alt/10 hover:border-secondary/50"
  >
    <!-- Company badge -->
    <div
      class="absolute -top-4 -right-4 bg-accent/90 text-bg-secondary pr-6 pl-3 pt-5 pb-2 rounded-full text-sm font-medium transform rotate-2 shadow-md"
    >
      {{ job.city }}
    </div>

    <div class="md:flex">
      <!-- Image section -->
      <div
        class="md:flex-shrink-0 md:w-56 p-6 flex flex-col items-center justify-start md:border-r border-fg-alt/10 bg-bg-alt/20"
      >
        <div
          class="relative w-32 h-32 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 p-4 shadow-inner flex items-center justify-center"
        >
          <a
            :href="job.link || '/'"
            target="_blank"
            rel="noopener noreferrer"
            class="block overflow-hidden transition-transform hover:scale-105"
          >
            <img
              :src="job.img"
              :alt="job.company"
              class="w-full h-full object-contain dark:hidden"
            />
            <img
              :src="job.imgD"
              :alt="job.company"
              class="w-full h-full object-contain hidden dark:block"
            />
          </a>
        </div>
        <p class="mt-4 text-center text-sm text-fg-alt font-mono">
          {{ job.period }}
        </p>
      </div>

      <!-- Content section -->
      <div class="p-6 md:p-8 flex-grow">
        <h3 class="text-2xl font-bold text-primary mb-2">{{ job.title }}</h3>
        <div class="text-lg font-semibold text-secondary mb-4">
          {{ job.company }}
        </div>

        <p
          v-if="job.description"
          class="text-fg mb-6 leading-relaxed border-l-4 border-secondary/30 pl-4"
        >
          {{ job.description }}
        </p>

        <!-- Dropdown for duties -->
        <div class="duties-dropdown mt-4">
          <button
            @click="toggleDuties"
            class="flex items-center bg-accent/70 px-4 py-2 rounded-full text-fg hover:bg-accent/30 transition-colors duration-300"
          >
            <CheckIcon
              :class="[
                'w-5 h-5 transition-transform duration-300',
                { 'rotate-180': isExpanded },
              ]"
            />
            <span class="ml-2">{{
              isExpanded ? dropdown[0] : dropdown[1]
            }}</span>
          </button>
          <ul v-if="isExpanded" class="mt-4 space-y-3">
            <li
              v-for="duty in job.duties"
              :key="duty"
              class="flex items-start text-fg"
            >
              <div
                class="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0"
              >
                <svg
                  class="w-3 h-3 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span class="flex-1">{{ duty }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
