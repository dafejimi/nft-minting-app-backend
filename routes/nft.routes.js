// routes/nft.routes.js
const express = require('express');
const router = express.Router();
const nftController = require('../controllers/nft.controller');

router.post('/', nftController.storeNFT);
router.get('/:nftId', nftController.getNFTById);
router.get('/gallery/:userWalletAddress', nftController.getNFTGallery);

module.exports = router;