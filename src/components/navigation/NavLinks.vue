<!-- NavLinks.vue -->
<script setup>
defineProps({
  navItems: {
    type: Array,
    required: true,
  },
  activeSection: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <nav class="hidden md:flex gap-1">
    <a
      v-for="item in navItems"
      :key="item.href"
      :href="item.href"
      :class="[
        'px-3 py-2 rounded-lg transition-all duration-300 font-medium relative',
        activeSection === item.id ? 'text-primary' : 'hover:text-primary',
      ]"
    >
      {{ item.label }}
      <span
        :class="[
          'absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 transition-transform duration-500',
          activeSection === item.id ? 'scale-x-100' : '',
        ]"
      ></span>
    </a>
  </nav>
</template>
