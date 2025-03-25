import { ref, onMounted } from "vue";
import { ethers } from "ethers";

import Networks from "@/lib/networks.json";

export function useWallet(t) {
  let provider = null;
  let network = null;
  const networkInfo = ref(null);
  const isConnected = ref(false);
  const account = ref("");
  const balance = ref(null);

  onMounted(() => {
    checkConnection();
  });

  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          await connectWallet();
        }
      } catch (error) {
        console.error("Error checking connection:", error);
      }
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      await setupProvider();
    } else {
      alert(t("wallet.no_ethereum_provider"));
    }
  };

  const setupProvider = async () => {
    try {
      provider = new ethers.BrowserProvider(window.ethereum);

      const accounts = await provider.send("eth_requestAccounts", []);
      account.value = accounts[0];
      isConnected.value = true;

      network = await provider.getNetwork();
      networkInfo.value = getNetworkInfo(network);

      const balanceWei = await provider.getBalance(account.value);
      balance.value = ethers.formatEther(balanceWei);

      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);
    } catch (error) {
      console.error("Error setting up provider:", error);
    }
  };

  const getNetworkInfo = (network) => {
    return {
      chainId: Networks[network.chainId]?.chainId || network.chainId,
      chainName: Networks[network.chainId]?.name || network.name,
      tokenName: Networks[network.chainId]?.nativeCurrency.name || "unkown",
      tokenSymbol: Networks[network.chainId]?.nativeCurrency.symbol || "???",
    };
  };

  const handleAccountsChanged = async (accounts) => {
    if (accounts.length === 0) {
      disconnectWallet();
    } else {
      account.value = accounts[0];
      await updateBalance();
    }
  };

  const handleChainChanged = async () => {
    await setupProvider();
    // const network = await provider.getNetwork();
    // chainId.value = network.chainId;
    // chainName.value = network.name;
    await updateBalance();
  };

  const updateBalance = async () => {
    const balanceWei = await provider.getBalance(account.value);
    balance.value = ethers.formatEther(balanceWei);
  };

  const disconnectWallet = async () => {
    await provider.destroy();
    if (window.ethereum) {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      window.ethereum.removeListener("chainChanged", handleChainChanged);
    }
    isConnected.value = false;
    account.value = "";
    // chainId.value = null;
    // chainName.value = "";
    balance.value = null;
    provider = null;
    network = null;
    networkInfo.value = null;
  };

  const shortenAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return {
    isConnected,
    account,
    networkInfo,
    balance,
    connectWallet,
    disconnectWallet,
    shortenAddress,
  };
}
