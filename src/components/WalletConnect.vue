<template>
    <div class="wallet-connect">
      <button 
        @click="connectWallet" 
        class="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        :class="{ 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700': isConnected }"
      >
        <div class="w-3 h-3 rounded-full" :class="isConnected ? 'bg-green-500' : 'bg-gray-500'"></div>
        <span v-if="isConnected">{{ shortenAddress(account) }}</span>
        <span v-else>{{ t('wallet.connect') }}</span>
      </button>
      
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full">
          <h3 class="text-xl font-bold mb-4">{{ t('wallet.modal_title') }}</h3>
          <p class="mb-6 text-gray-600 dark:text-gray-400">{{ t('wallet.modal_description') }}</p>
          
          <div class="grid grid-cols-2 gap-4">
            <button 
              @click="mockConnect('MetaMask')" 
              class="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div class="w-12 h-12 mb-2 bg-orange-500 rounded-full flex items-center justify-center">
                <span class="text-white font-bold">M</span>
              </div>
              <span>MetaMask</span>
            </button>
            
            <button 
              @click="mockConnect('WalletConnect')" 
              class="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div class="w-12 h-12 mb-2 bg-blue-500 rounded-full flex items-center justify-center">
                <span class="text-white font-bold">W</span>
              </div>
              <span>WalletConnect</span>
            </button>
            
            <button 
              @click="mockConnect('Coinbase')" 
              class="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div class="w-12 h-12 mb-2 bg-blue-700 rounded-full flex items-center justify-center">
                <span class="text-white font-bold">C</span>
              </div>
              <span>Coinbase</span>
            </button>
            
            <button 
              @click="mockConnect('Trust Wallet')" 
              class="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div class="w-12 h-12 mb-2 bg-purple-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold">T</span>
              </div>
              <span>Trust Wallet</span>
            </button>
          </div>
          
          <div class="mt-6 flex justify-end">
            <button 
              @click="showModal = false" 
              class="px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {{ t('wallet.cancel') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useTranslations, getLangFromUrl } from '@/i18n/utils';
  
  const isConnected = ref(false);
  const account = ref('');
  const showModal = ref(false);
  const lang = getLangFromUrl(new URL(window.location.href));
  const t = useTranslations(lang);
  
  const connectWallet = () => {
    if (isConnected.value) {
      // If already connected, disconnect
      isConnected.value = false;
      account.value = '';
    } else {
      // Show wallet selection modal
      showModal.value = true;
    }
  };
  
  const mockConnect = (walletType) => {
    // Generate a random Ethereum address
    const randomAddr = '0x' + Array.from({length: 40}, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
    
    account.value = randomAddr;
    isConnected.value = true;
    showModal.value = false;
    
    // Show notification
    alert(`${t('wallet.connected_with')} ${walletType}!`);
  };
  
  const shortenAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  </script>  