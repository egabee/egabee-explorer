export type Network = {
  unit: string;
  id: string;
  name: string;
  chainId: string;
  env: string;
  createdAt: string;
  explorer: string;
};



export type TrackedNetwork = Network & { title: string };
