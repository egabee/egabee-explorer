import ky from "ky";
import { createAuthHeader } from "./create-auth-header";
import { createUrl } from "./fetcher";
// import { ApiResponse } from './alert'

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
  metadata: TokenMetadata | null;
}

export interface UserToken {
  createdAt: string;
  id: string;
  name: string;
  tokenId: string;
  updatedAt: string;
  userId: string;
}

export interface CombinedToken {
  token: Token;
  userToken: UserToken;
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
