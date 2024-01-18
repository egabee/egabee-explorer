export interface Metadata {
  artist: string;
  year: number;
}

export interface CombinedNft {
  userNft: UserNft;
  nft: Nft;
}
export interface UserNft {
  created_at: string;
  id: string;
  name: string;
  nft_id: string;
  project_id: string;
  updated_at: string;
  selected: boolean;
}
export interface Nft {
  class_id: string;
  created_at: string;
  description: string;
  id: string;
  issuer_address: string;
  metadata: Metadata;
  name: string;
  network_id: string;
  nft_id: string;
  owner_address: string;
  royalty_rate: string;
  symbol: string;
  updated_at: string;
}

export const isValidNftaddress = (searchText: string) => {
  if (searchText.length > 4) {
    return true;
  } else {
    return false;
  }
};
