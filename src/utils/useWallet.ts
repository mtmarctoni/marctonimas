import type { Network } from "ethers";
import { BrowserProvider, formatEther } from "ethers";

import networksJson from "@/lib/networks.json";

interface NetworkMetadata {
  name: string;
  nativeCurrency: {
    name: string;
    symbol: string;
  };
}

const Networks = networksJson as Record<string, NetworkMetadata>;

export interface NetworkInfo {
  chainId: string;
  chainName: string;
  tokenName: string;
  tokenSymbol: string;
}

interface WalletState {
  isConnected: boolean;
  account: string;
  networkInfo: NetworkInfo | null;
  balance: string | null;
  clientHasWallet: boolean;
}

interface EthereumProvider {
  request(args: { method: string; params?: readonly unknown[] }): Promise<unknown>;
  on(event: string, listener: (...args: unknown[]) => void): void;
  removeListener(event: string, listener: (...args: unknown[]) => void): void;
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

const state: WalletState = {
  isConnected: false,
  account: "",
  networkInfo: null,
  balance: null,
  clientHasWallet: true,
};

const listeners = new Set<() => void>();

const emit = (): void => {
  for (const listener of listeners) {
    listener();
  }
};

export const getWalletState = (): Readonly<WalletState> => state;

export const subscribeWallet = (listener: () => void): (() => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

let provider: BrowserProvider | null = null;
let network: Network | null = null;
let listenersAttached = false;

const getNetworkInfo = (chain: Network): NetworkInfo => {
  const meta = Networks[String(chain.chainId)];
  return {
    chainId: String(chain.chainId),
    chainName: meta?.name ?? chain.name,
    tokenName: meta?.nativeCurrency.name ?? "unknown",
    tokenSymbol: meta?.nativeCurrency.symbol ?? "???",
  };
};

const updateBalance = async (): Promise<void> => {
  if (!provider) return;
  const balanceWei = await provider.getBalance(state.account);
  state.balance = formatEther(balanceWei);
};

const handleAccountsChanged = async (accounts: unknown): Promise<void> => {
  const addressList = accounts as string[];
  if (addressList.length === 0) {
    await disconnectWallet();
  } else {
    state.account = addressList[0] ?? "";
    await updateBalance();
    emit();
  }
};

const handleChainChanged = async (): Promise<void> => {
  await setupProvider();
  await updateBalance();
};

const attachListeners = (): void => {
  if (listenersAttached || !window.ethereum) return;
  window.ethereum.on("accountsChanged", handleAccountsChanged);
  window.ethereum.on("chainChanged", handleChainChanged);
  listenersAttached = true;
};

const detachListeners = (): void => {
  if (!listenersAttached || !window.ethereum) return;
  window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
  window.ethereum.removeListener("chainChanged", handleChainChanged);
  listenersAttached = false;
};

const setupProvider = async (): Promise<void> => {
  if (!window.ethereum) return;
  const newProvider = new BrowserProvider(window.ethereum);
  const accounts = (await newProvider.send("eth_requestAccounts", [])) as string[];
  state.account = accounts[0] ?? "";
  state.isConnected = true;

  network = await newProvider.getNetwork();
  state.networkInfo = getNetworkInfo(network);

  const balanceWei = await newProvider.getBalance(state.account);
  state.balance = formatEther(balanceWei);

  provider = newProvider;
  attachListeners();
  emit();
};

export const connectWallet = async (): Promise<boolean> => {
  if (window.ethereum) {
    state.clientHasWallet = true;
    try {
      await setupProvider();
      return state.isConnected;
    } catch (error) {
      console.error("Error connecting wallet:", error);
      return false;
    }
  }
  state.clientHasWallet = false;
  emit();
  return false;
};

export const disconnectWallet = async (): Promise<void> => {
  detachListeners();
  try {
    await provider?.destroy();
  } catch (error) {
    console.error("Error destroying provider:", error);
  }
  provider = null;
  network = null;
  state.isConnected = false;
  state.account = "";
  state.networkInfo = null;
  state.balance = null;
  emit();
};

export const checkConnection = async (): Promise<void> => {
  if (!window.ethereum) return;
  try {
    const accounts = (await window.ethereum.request({
      method: "eth_accounts",
    })) as string[];
    if (accounts.length > 0) {
      await setupProvider();
    }
  } catch (error) {
    console.error("Error checking connection:", error);
  }
};

export const shortenAddress = (address: string): string =>
  address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "";
