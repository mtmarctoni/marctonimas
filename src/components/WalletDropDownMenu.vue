<script setup>
import { getLangFromUrl, useTranslations } from "@/i18n/utils";
import { LogoutIcon } from "@/utils/icons";

const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);
const { network, balance, disconnectWallet } = defineProps([
  "network",
  "balance",
  "disconnectWallet",
]);
</script>

<template>
  <div class="p-3 border-b border-fg-alt/10">
    <p class="text-base text-fg-alt font-bold">
      {{ t("wallet.connected") }}
    </p>
  </div>
  <div class="p-3 space-y-1 text-sm">
    <div class="flex justify-between">
      <span class="text-fg-alt font-semibold">{{ t("wallet.chainId") }}: </span>
      <span class="font-medium">{{ network.chainId }}</span>
    </div>
    <div class="flex justify-between">
      <span class="text-fg-alt font-semibold">{{ t("wallet.network") }}: </span>
      <span class="font-medium">{{ network.chainName }}</span>
    </div>
    <div class="flex justify-between">
      <span class="text-fg-alt font-semibold">{{ t("wallet.balance") }}: </span>
      <span class="font-medium">{{ balance }} {{ network.tokenSymbol }}</span>
    </div>
  </div>
  <button
    @click="disconnectWallet"
    class="w-full p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/50 transition-colors flex items-center gap-2"
  >
    <LogoutIcon class="w-4 h-4" />
    {{ t("wallet.disconnect") }}
  </button>
</template>
