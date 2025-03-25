<!-- SocialLinks.vue -->
<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="space-y-3">
    <a
      v-for="link in links"
      :key="link.href"
      :href="link.href"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-fg-alt/10 transition-colors"
    >
      <component :is="link.icon" class="w-6 h-6 text-primary" />
      <span>{{ link.label }}</span>
    </a>
  </div>
</template>
