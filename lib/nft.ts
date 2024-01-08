export interface Metadata {
  artist: string;
  year: number;
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



export const isValidNftData = (searchText: string) => {
  const maxNetworkLength = 10;
  const separator = "1";

  const contractAddressRegex = new RegExp(
    `^[a-zA-Z0-9]{1,${maxNetworkLength}}${separator}.{58}$`
  ); // edit this

  return contractAddressRegex.test(searchText);
};
