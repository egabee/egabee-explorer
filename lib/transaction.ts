export interface Transaction {
  txHash: string;
  status: "success" | "failed";
  from: string;
  to: string;
  time: string;
  function: string;
}

export interface Tx {
  contracts: {
    id: string;
    contractName: string;
    contractAddress: string;
  }[];
  address: string;
  blockNumber: number;
  chainId: string;
  events: {
    attributes: {
      key: string;
      value: string;
    }[];
    type: string;
  }[];
  gasUsed: number;
  gasWanted: number;
  id: string;
  log: null;
  messages: {
    type: string;
    value: string;
  }[];
  success: boolean;
  timestamp: number;
  txType: string;
}

export type Attribute = {
  key: string;
  value: string;
};

export type Event = {
  type: string;
  attributes: Attribute[];
};
export type Message = {
  type: string;
  value: string;
};
export type AggregatedMessage = {
  type: string;
  values: string[];
};

export const isValidTxHash = (searchText: string) =>
  /^[0-9a-fA-F]{64}$/.test(searchText);
