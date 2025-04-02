<script setup>
import SocialLinks from "./SocialLinks.vue";
import { MY_EMAIL, MY_LINKEDIN, MY_GITHUB } from "@/utils/constants";
import { EmailIcon, LinkedInIcon, GithubIcon } from "@/utils/icons";

defineProps({
  navItems: {
    type: Array,
    required: true,
  },
  activeSection: {
    type: String,
    default: "",
  },
  footerText: {
    type: String,
    default: "",
  },
  connectText: {
    type: String,
    default: "Connect",
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close"]);

// Social links
const socialLinks = [
  { href: `mailto:${MY_EMAIL}`, icon: EmailIcon, label: MY_EMAIL },
  {
    href: `https://linkedin.com/in/${MY_LINKEDIN}`,
    icon: LinkedInIcon,
    label: `LinkedIn: ${MY_LINKEDIN}`,
  },
  {
    href: `https://github.com/${MY_GITHUB}`,
    icon: GithubIcon,
    label: `GitHub: ${MY_GITHUB}`,
  },
];

const currentYear = new Date().getFullYear();
</script>

<template>
  <transition
    enter-active-class="transition-all duration-700 ease-out"
    enter-from-class="opacity-90 -translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-700 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-90 -translate-y-full"
  >
    <div
      v-show="isOpen"
      class="md:hidden overflow-y-auto fixed inset-0 top-[73px] bg-bg flex flex-col h-[75vh] transform rounded-b-4xl border-b-2 border-primary/50"
    >
      <nav class="container mx-auto px-4 pt-8 flex flex-col">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :class="[
            'py-4 px-4 text-lg font-medium border-l-4 mb-2 transition-all duration-200',
            activeSection === item.id
              ? 'border-primary bg-primary/10 text-primary'
              : 'border-transparent hover:border-primary/50 hover:bg-fg-alt/5',
          ]"
          @click="$emit('close')"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Social Links Section -->
      <div class="my-auto p-4">
        <h3 class="text-lg font-medium px-4 mb-4 text-fg-alt">
          {{ connectText }}
        </h3>
        <div class="mx-4">
          <p class="-mt-2 border-t-2 border-primary/80"></p>
        </div>
        <SocialLinks :links="socialLinks" />
      </div>

      <!-- Footer -->
      <div
        class="my-auto p-4 border-t border-secondary text-center text-fg-alt text-sm"
      >
        <p class="text-fg-alt text-sm mb-4 md:mb-0">
          &copy; {{ `${currentYear} ${footerText}` }}
        </p>
      </div>
    </div>
  </transition>
</template>
