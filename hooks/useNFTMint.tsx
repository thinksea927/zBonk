import { useAccount, useContractWrite } from "wagmi";
import { NFTAddress } from "../constants";
import NFTAbi from "../abis/NFTAbi.json";

const useNFTMint = (pwd: string) => {
  const { address, isConnected } = useAccount();

  const { writeAsync, status } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: NFTAddress,
    abi: NFTAbi,
    functionName: "mint",
    args: [pwd],
    onError(error) {
      console.log("Error", error);
    },
  });

  return {
    freeMintAsync: writeAsync,
    freeMintStatus: status,
    isConnected,
  };
};

export default useNFTMint;
