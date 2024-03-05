export interface Metadata {
  artist: string;
  year: number;
}

export interface CombinedNft {
  userNft: UserNft;
  nft: Nft;
}
export interface UserNft {
  createdAt: string;
  id: string;
  name: string;
  nftId: string;
  projectId: string;
  updatedAt: string;
  selected: boolean;
}
export interface Nft {
  classId: string;
  createdAt: string;
  description: string;
  id: string;
  issuerAddress: string;
  metadata: Metadata;
  name: string;
  networkId: string;
  nftId: string;
  ownerAddress: string;
  royaltyRate: string;
  symbol: string;
  updatedAt: string;
}

export const isValidNftaddress = (searchText: string) => {
  if (searchText.length > 4) {
    return true;
  } else {
    return false;
  }
};
