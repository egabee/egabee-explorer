import { isValidContractAddress } from "./contract";

export interface TokenMetadata {
  burnRate: string;
  description: string;
  features: string[];
  initialAmount: number;
  issuer: string;
  precision: number;
  sendCommissionRate: string;
  subunit: string;
  symbol: string;
}

export interface Token {
  createdAt: string;
  creator: string;
  description: null;
  id: string;
  name: string;
  networkId: string;
  symbol: string;
  tokenAddress: string;
  updatedAt: string;
  subunit: string;
  issuer: string;
  features: string;
  version: string;
  precision: number;
  metadata: TokenMetadata | null;
}


export interface TokenDetails {
  id: string;
  token_id: string;
  burn_rate: string;
  denom: string;
  description: string;
  features: string;
  globally_frozen: boolean;
  issuer: string;
  precision: number;
  send_commission_rate: string;
  subunit: string;
  symbol: string;
  version: string;
  metadata: TokenMetadata | null;
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
export const isValidTokenAddress = (searchText: string) => {
  // first variant
  if (isValidContractAddress(searchText)) {
    return true;
  }

  // second variant
  const tokenAddressRegex = /^([^-\s]+)-(.+)$/; // Matches "prefix-walletAddressOrContractAddress"
  const matchResult = searchText.match(tokenAddressRegex);

  if (matchResult?.length === 3) {
    const [, prefix, walletOrContractAddress] = matchResult;
    return (
      isValidWalletAddress(walletOrContractAddress) ||
      isValidContractAddress(walletOrContractAddress)
    );
  }

  return false;
};
