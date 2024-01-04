export type Network = {
  unit: string;
  id: string;
  name: string;
  chainId: string;
  env: string;
  createdAt: string;
  explorer: string;
};
export interface UserNetwork {
  id: string
  name: string
  networkId: string
  updatedAt: string
  createdAt: string
  userId: string
  selected: boolean
}

export interface CombinedNetwork {
  userNetwork: UserNetwork
  network: Network
}