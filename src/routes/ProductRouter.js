const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.put('/edit/:param', productController.updateProducts);
router.get('/:param', productController.getDetailProduct);
router.post('/create', productController.postNewProduct);
router.get('/', productController.allProducts);
router.delete('/delete/:param', productController.deleteProducts);

module.exports = router;
