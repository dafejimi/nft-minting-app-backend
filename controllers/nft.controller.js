// controllers/nft.controller.js
const NFT = require('../models/nft.model');

const nftController = {
  storeNFT: async (req, res, next) => {
    try {
      const { name, description, logoUrl, nftId, userWalletAddress } = req.body;

      if (!name || !description || !logoUrl || !nftId || !userWalletAddress) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields'
        });
      }

      const existingNFT = await NFT.findOne({ nftId });
      if (existingNFT) {
        return res.status(409).json({
          success: false,
          error: 'NFT with this ID already exists'
        });
      }

      const nft = new NFT({
        nftId,
        name,
        description,
        logoUrl,
        userWalletAddress
      });

      await nft.save();

      res.status(201).json({
        success: true,
        data: nft
      });
    } catch (error) {
      next(error);
    }
  },

  getNFTById: async (req, res, next) => {
    try {
      const nft = await NFT.findOne({ nftId: req.params.nftId });
      
      if (!nft) {
        return res.status(404).json({
          success: false,
          error: 'NFT not found'
        });
      }

      res.json({
        success: true,
        data: nft
      });
    } catch (error) {
      next(error);
    }
  },

  getNFTGallery: async (req, res, next) => {
    try {
      const nfts = await NFT.find({ 
        userWalletAddress: req.params.userWalletAddress 
      }).sort({ createdAt: -1 });

      res.json({
        success: true,
        data: nfts
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = nftController;