import { Network } from "./network";

export interface UserWallet {
  balance: number;
  id: string;
  displayName: string;
  address: string;
  networkId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  selected: boolean;
}

export interface CombinedWallet {
  network: Network;
  wallet: UserWallet;
}

export const isValidWalletAddress = (searchText: string) => {
  const maxNetworkLength = 10; // Maximum length for the network prefix
  const separator = "1";

  // The regex pattern expects exactly 38 characters after the separator
  const walletAddressRegex = new RegExp(
    `^[a-zA-Z0-9]{1,${maxNetworkLength}}${separator}.{38}$`
  );

  return walletAddressRegex.test(searchText);
};
