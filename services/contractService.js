
// services/contract.service.js
const { ethers } = require('ethers');

const contractService = {
  checkNFTExists: async (tokenId, contractAddress, abi) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
      const contract = new ethers.Contract(contractAddress, abi, provider);
      return await contract.checkId(tokenId);
    } catch (error) {
      console.error('Error checking NFT existence:', error);
      throw error;
    }
  }
};

module.exports = contractService;