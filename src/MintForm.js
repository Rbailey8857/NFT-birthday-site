import React, { useState } from "react";
import { ethers } from "ethers";

// Replace with the address of your NFT contract
const contractAddress = "0x123...";

// Replace with the ABI of your NFT contract
const abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
    // Other contract functions and variables...
  ];

// Connect to the Ethereum network
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// Create an instance of the NFT contract
const contract = new ethers.Contract(contractAddress, abi, signer);

export function MintForm() {
  // State variables to store the token ID and mint price
  const [tokenId, setTokenId] = useState("");

  // Function to handle the mint form submission
  async function handleSubmit(event) {
    event.preventDefault();

    // Call the mint function of the NFT contract
    await contract.mint(tokenId);

    // Reset the form fields
    setTokenId("");
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Token ID:</label>
        <input
          placeholder="Chose a tokenID"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={tokenId}
          onChange={(event) => setTokenId(event.target.value)}
        />
      </div>
      <div className="mb-6 text-center">
        <button
          className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
           CLICK TO MINT
        </button>
      </div>
    </form>
  );
}
