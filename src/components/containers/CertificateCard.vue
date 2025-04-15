<!-- CertificateCard.vue -->
<template>
  <div
    class="flex flex-col relative bg-bg-secondary rounded-2xl p-6 border border-fg-alt/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
  >
    <!-- Date badge -->
    <a
      :href="issuerLink"
      target="_blank"
      class="absolute -top-2 -right-2 bg-secondary/30 text-fg-secondary px-3 py-1 rounded-full font-medium backdrop-blur-sm text-sm hover:text-bg-secondary hover:bg-primary hover:scale-105 transition-all duration-300"
    >
      {{ issuer }} ↗
    </a>

    <div class="flex flex-col md:flex-row items-center gap-4">
      <!-- Icon container with gradient border -->
      <div class="relative flex-shrink-0">
        <div
          class="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur"
        ></div>
        <div
          class="relative w-16 h-16 rounded-full bg-bg-alt flex items-center justify-center"
        >
          <img v-if="icon" :src="icon" :alt="issuer" class="w-12 h-12 text-white" />
          <CertificateIcon v-else class="w-6 h-6 text-primary" />
        </div>
      </div>

      <!-- Text content -->
      <div class="flex flex-col flex-grow items-center md:items-start">
        <h3 class="text-xl font-bold text-primary mb-1 text-center md:text-start">
          {{ name }}
        </h3>
        <p class="text-fg text-center md:text-start">{{ description }}</p>
        <p class="text-sm italic text-center md:text-start">{{ date }}</p>
        <!-- Action buttons -->
        <div class="flex mt-4">
          <a
            v-if="status === 'completed'"
            :href="link"
            target="_blank"
            class="flex mx-auto items-center justify-center gap-2 px-4 py-2 bg-accent/50 text-fg hover:font-semibold rounded-lg hover:bg-accent/20 transition-colors"
          >
            <CertificateIcon
              class="w-5 h-5 group-hover:scale-110 transition-all duration-300"
            />
            <span>{{ button }}</span>
          </a>
          <div
            v-else
            class="flex mx-auto items-center justify-center gap-2 px-4 py-2 bg-accent/30 text-accent px-3 py-1 rounded-full font-medium backdrop-blur-sm text-sm hover:text-bg-secondary hover:bg-accent/50 hover:scale-105 transition-all duration-300 "
          >
            <span class="text-accent/70">{{ inProgress }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CertificateIcon } from "@/utils/icons";

defineProps({
  name: String,
  description: String,
  issuer: String,
  date: String,
  link: String,
  issuerLink: String,
  icon: String,
  button: String,
  inProgress: String,
  status: {
    type: String,
    default: 'completed',
    validator: (value) => ['completed', 'in-progress'].includes(value)
  }
});
</script>
