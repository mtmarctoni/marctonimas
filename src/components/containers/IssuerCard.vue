<!-- IssuerCard.vue -->
<template>
  <div class="relative bg-bg-secondary rounded-2xl p-6 border border-fg-alt/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
    <!-- Issuer Header -->
    <div class="flex items-center gap-4 mb-4">
      <!-- Icon container with gradient border -->
      <div class="relative flex-shrink-0">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur"></div>
        <div class="relative w-16 h-16 rounded-full bg-bg-alt flex items-center justify-center">
          <img v-if="icon" :src="icon" :alt="issuer" class="w-12 h-12 text-white" loading="lazy" />
          <CertificateIcon v-else class="w-6 h-6 text-primary" />
        </div>
      </div>

      <div class="flex-grow">
        <h3 class="text-2xl font-bold text-primary">
          <a :href="issuerLink" target="_blank" class="hover:underline">
            {{ issuer }}
          </a>
        </h3>
        <p class="text-sm text-fg/80">{{ certificates.length }} certificate{{ certificates.length > 1 ? 's' : '' }}</p>
      </div>
    </div>

    <!-- Certificates List -->
    <div class="space-y-4 mt-4">
      <div v-for="cert in certificates" :key="cert.id" class="pl-4 border-l-2 border-accent/30 hover:border-primary/50 transition-colors">
        <div class="flex flex-col">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-semibold text-fg">{{ cert.name }}</h4>
          </div>
          <p class="text-sm text-fg/80 mt-1">{{ cert.date }}</p>
          <p v-if="cert.description" class="text-sm text-fg/70 mt-1">{{ cert.description }}</p>
          <span 
            v-if="cert.status === 'in-progress'" 
            class="text-xs px-4 py-2 bg-accent/30 text-accent rounded-full mx-auto mt-2"
          >
            {{ inProgress }}
          </span>
          <a
            v-if="cert.status === 'completed' && cert.link"
            :href="cert.link"
            target="_blank"
            class="mt-2 text-sm flex items-center gap-1 text-primary hover:underline mx-auto"
          >
            <CertificateIcon class="w-3 h-3" />
            <span>{{ button }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CertificateIcon } from "@/utils/icons";

defineProps({
  issuer: {
    type: String,
    required: true
  },
  issuerLink: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  certificates: {
    type: Array,
    required: true
  },
  button: {
    type: String,
    required: true
  },
  inProgress: {
    type: String,
    required: true
  }
});
</script>
