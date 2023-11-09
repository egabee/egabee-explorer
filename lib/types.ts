export interface Contract {
  map: any;
  id: string;
  creator: string;
  contractName: string;
  contractAddress: string;
  codeId: number;
  admin: string;
  networkId: string;
  createdAt: string;
  updatedAt: string;
}

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
