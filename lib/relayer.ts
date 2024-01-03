export type Relayer = {
  clientId: string;
  clientType: string;
  consensusHeight: string;
  id: string;
  networkId: string;
  signer: string;
  createdAt: string;
  name: string;

  // created_at: string
  // id: string
  // name: string
  // project_id: string
  // relayer_id: string
  // updated_at: string
};


export type TrackedRelayer = Relayer & { title: string };
