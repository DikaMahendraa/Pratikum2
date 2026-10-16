const express = require('express');
const router = express.Router();
const pageController = require('../controllers/page.controller.js');
router.post('/katalog/tambah', pageController.postTambahProduk);
router.get('/', pageController.getBeranda);
router.get('/katalog', pageController.getKatalog);
module.exports = router;