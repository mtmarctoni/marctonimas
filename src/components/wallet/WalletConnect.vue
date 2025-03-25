<template>
  <div class="wallet-connect">
    <!-- Connected state with dropdown menu -->
    <div v-if="isConnected" class="relative">
      <button
        @click="toggleDropdown"
        :class="{
          'hover:bg-accent/40': !showDropdown,
        }"
        class="flex items-center gap-2 px-4 py-2 bg-accent/70 rounded-full transition-all duration-300 hover:shadow-md group"
      >
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <span class="font-medium">{{ shortenAddress(account) }}</span>
        <CheckIcon
          class="w-4 h-4 transform transition-transform"
          :class="{ 'rotate-180': showDropdown }"
        />
      </button>

      <!-- Dropdown menu -->
      <div
        v-if="showDropdown"
        class="absolute -left-10 mt-2 w-64 rounded-md shadow-lg bg-bg-secondary border border-fg-alt/10 overflow-hidden z-10"
      >
        <WalletDropDownMenu
          :balance="balance"
          :network="networkInfo"
          :disconnectWallet="disconnectWallet"
        />
      </div>
    </div>

    <!-- Not connected state -->
    <button
      v-else
      @click="connectWallet"
      class="flex items-center gap-2 px-4 py-2 text-bg bg-gradient-to-r from-secondary to-tertiary rounded-full border-2 border-primary/50 hover:scale-105 transition-all duration-300 hover:shadow-xl"
    >
      <div class="w-3 h-3 rounded-full bg-bg"></div>
      <span>{{ t("wallet.connect") }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useTranslations, getLangFromUrl } from "@/i18n/utils";
import { CheckIcon } from "@/utils/icons";
import { useWallet } from "@/composables/useWallet";
import WalletDropDownMenu from "./WalletDropDownMenu.vue";

const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);
const showDropdown = ref(false);

const {
  isConnected,
  account,
  networkInfo,
  balance,
  connectWallet,
  disconnectWallet,
  shortenAddress,
} = useWallet(t);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// Close dropdown when clicking outside
const closeDropdown = (e) => {
  if (!e.target.closest(".wallet-connect")) {
    showDropdown.value = false;
  }
};

// Add and remove event listener
onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>
