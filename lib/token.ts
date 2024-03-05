import ky from "ky";
import { createUrl } from "./fetcher";
import { isValidContractAddress } from "./contract";
import { isValidWalletAddress } from "./wallet";
import { TokensInsights } from "./types";

export type NewTokenRequest = {
  name: string;
  chainId: string;
  address: string;
};

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

export interface UserToken {
  createdAt: string;
  id: string;
  name: string;
  tokenId: string;
  updatedAt: string;
  userId: string;
  selected: boolean;
}

export interface CombinedToken {
  token: Token;
  userToken: UserToken;
}

export interface TokenDetails {
  id: string;
  tokenId: string;
  burnRate: string;
  denom: string;
  description: string;
  features: string;
  globallyFrozen: boolean;
  issuer: string;
  precision: number;
  sendCommissionRate: string;
  subunit: string;
  symbol: string;
  version: string;
  metadata: TokenMetadata | null;
}





export type Insight = {
  successRate: {
    change: number
    value: number
  }
  txCount: {
    change: number
    value: number
  }
  gasConsumption: {
    change: bigint
    value: number
  }
}

export type ContractInsight = Insight


export const isValidTokenAddress = (searchText: string) => {
  // first variant
  if (isValidContractAddress(searchText)) {
    return true
  }

  // second variant
  const tokenAddressRegex = /^([^-\s]+)-(.+)$/ // Matches "prefix-walletAddressOrContractAddress"
  const matchResult = searchText.match(tokenAddressRegex)

  if (matchResult?.length === 3) {
    const [, prefix, walletOrContractAddress] = matchResult
    return isValidWalletAddress(walletOrContractAddress) || isValidContractAddress(walletOrContractAddress)
  }

  return false
}

export const mapToTokenDetails = ({
  token,
  userToken,
}: CombinedToken): TokenDetails => {
  return {
    id: token.id,
    tokenId: userToken.tokenId,
    denom: token.tokenAddress,
    description: token.description || "",
    symbol: token.symbol,
    burnRate: token.metadata?.burnRate || "",
    features: token.metadata?.features.join(",") || "",
    globallyFrozen: false,
    issuer: token.metadata?.issuer || "",
    precision: token.metadata?.precision || 0,
    sendCommissionRate: token.metadata?.sendCommissionRate || "",
    subunit: token.metadata?.subunit || "",
    version: "0.0.1" || "",
    metadata: token.metadata || null,
  };
};

export const fetchInsightData = async (tokenAddress: string) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const endpoint = `/api/0/tokens/${tokenAddress}/insight/`;
    const resp = await ky.get(createUrl(endpoint), { headers });
    if (!resp.ok) {
      throw new Error(`Failed to fetch insights data: ${resp.statusText}`);
    }

    const data: TokensInsights[] = await resp.json();

    return data;
  } catch (error) {
    console.error("Error fetching insights data:", error);
  }
};
