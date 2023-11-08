import ky from "ky";
import { createAuthHeader } from "./create-auth-header";
import { createUrl } from "./fetcher";

export type CreateNewContract = {
  name?: string;
  chainId: string;
  address: string;
};

export interface Contract {
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

export interface UserContract {
  id: string;
  name: string;
  userId: string;
  contractId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CombinedContract {
  userContract: UserContract;
  contract: Contract;
}
export interface General {
  id: string;
  address?: string;
  name: string;
  network: string;
}
