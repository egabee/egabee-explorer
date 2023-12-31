export interface Contract {
  codeId: number;
  id: string;
  creator: string;
  contractName: string;
  contractAddress: string;
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
  selected: boolean;
}

export interface CombinedContract {
  userContract: UserContract;
  contract: Contract;
}

export const isValidContractAddress = (searchText: string) => {
  const maxNetworkLength = 10; // Maximum length for the network prefix
  const separator = "1";

  const contractAddressRegex = new RegExp(
    `^[a-zA-Z0-9]{1,${maxNetworkLength}}${separator}.{58}$`
  );

  return contractAddressRegex.test(searchText);
};
